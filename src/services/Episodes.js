import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export default class EpisodesService {
  client = new ApolloClient({
    uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
    request: operation => {
      const token = sessionStorage.token;
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    }
  });
  getEpisodes = async () => {
    const response = await this.client.query({
      query: gql`
        query {
          allEpisodes(first: 5) {
            edges {
              cursor
              node {
                episodeId
                title
                openingCrawl
                image
                director
                releaseDate
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
            totalCount
          }
        }
      `
    });
    return response.data.allEpisodes.edges;
  };
}
