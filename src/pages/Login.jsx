import React, { useState }from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import { fakeAuth } from '../services/auth'
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";


export default function Login() {
    let history = useHistory();
    let location = useLocation();
    const [episodes, setEpisodes] = useState([])
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };

    const client = new ApolloClient({
        uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
      });
    const fetchData = () => {
        client.mutate({
            mutation: gql`
            mutation {
                signIn(email:"demo@st6.io", password:"demo1234") {
                  token
                }
              }
            `
        })
        .then(result => {
            const newClient = new ApolloClient({
                uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
                request: (operation) => {
                    const token = result.data.signIn.token
                    operation.setContext({
                    headers: {
                        authorization: token ? `Bearer ${token}` : ''
                    }
                    })
                }
            });
            newClient.query({
                query: gql`
                query {
                    allEpisodes(first: 5) {
                      edges {
                        cursor,
                        node {
                          episodeId,
                          title,
                          openingCrawl,
                          image,
                          director,
                          releaseDate
                        }
                      },
                      pageInfo {
                        hasNextPage,
                        endCursor
                      },
                      totalCount
                    }
                  }
                `    
            }).then(result => setEpisodes(result.data.allEpisodes.edges))
        } )
    }

        
    return (
        <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
        <button onClick={fetchData}>fetchData</button>
        {episodes.map(episode => 
            <li key={episode.node.episodeId}>
                episode: {episode.node.episodeId} <br/>
                title: {episode.node.title} <br/>
                <img width='300px' src={episode.node.image} alt={episode.node.title}/>
            </li>)}
        </div>
    );
}
