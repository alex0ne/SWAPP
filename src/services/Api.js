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
          allEpisodes(first: 10) {
            edges {
              node {
                id
                episodeId
                title
                openingCrawl
                image
                director
                releaseDate
              }
            }
          }
        }
      `
    });
    return response.data.allEpisodes.edges.sort(
      (a, b) => a.node.episodeId - b.node.episodeId
    );
  };
  getEpisode = async episodeId => {
    const response = await this.client.query({
      query: gql`
        query {
          episode(id: "${episodeId}") {
            id
            episodeId
            title
            openingCrawl
            image
            director
            releaseDate
            people(first:5) {
              edges {
                node {
                  id
                  name
                  image
                }
              }
              pageInfo {
                hasNextPage
              }
            }
          }
        }
      `
    });
    return response.data.episode;
  };
  loadMoreCharactersForEpisode = async (episodeId, currentCharactersCount) => {
    const response = await this.client.query({
      query: gql`
        query {
          episode(id: "${episodeId}") {
            id
            episodeId
            title
            openingCrawl
            image
            director
            releaseDate
            people(first:${currentCharactersCount + 5}) {
              edges {
                node {
                  id
                  name
                  image
                }
              }
              pageInfo {
                hasNextPage
              }
            }
          }
        }
      `
    });
    return response.data.episode;
  };
  getCharacters = async () => {
    const response = await this.client.query({
      query: gql`
        query {
          allPeople(first: 12) {
            edges {
              node {
                id
                name
                image
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      `
    });
    return response.data.allPeople;
  };
  loadMoreCharacters = async currentCharactersCount => {
    const response = await this.client.query({
      query: gql`
        query {
          allPeople(first: ${currentCharactersCount + 12}) {
            edges {
              node {
                id
                name
                image
              }
            }
            pageInfo{
              hasNextPage
            }
          }
        }
      `
    });
    return response.data.allPeople;
  };
  getCharacter = async characterId => {
    const response = await this.client.query({
      query: gql`
        query {
          person(id:"${characterId}") {
            id
            name
            height
            mass
            image
            species {
              id
              name
            }
            homeworld{
              name
            }
            starships(first:100){
              edges{
                node{
                  id
                  name
                  image
                }
              }
            }
          }
        }
      `
    });
    return response.data.person;
  };
  getStarship = async starshipId => {
    const response = await this.client.query({
      query: gql`
        query {
          starship(id: "${starshipId}") {
            id
            name
            starshipClass
            cost
            crew
            maxAtmosphericSpeed
            hyperdriveRating
            model
            image
          }
        }
      `
    });
    return response.data.starship;
  };
}
