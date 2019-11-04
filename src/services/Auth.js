import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export class AuthService {
  isAuthenticated = sessionStorage.token ? true : false;
  signIn(username, password) {
    const client = new ApolloClient({
      uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql'
    });
    client
      .mutate({
        mutation: gql`
          mutation {
              signIn(email: "${username}", password: "${password}") {
              token
            }
          }
        `
      })
      .then(result => {
        sessionStorage.token = result.data.signIn.token;
        window.location = '/episodes';
      })
      .catch(err => {
        if (err.networkError) {
          const errorMessage = err.networkError.message;
          console.error(errorMessage);
          // throw new Error(errorMessage);
        } else {
          const errorMessage = err.graphQLErrors[0].message;
          console.error(errorMessage);
          // throw new Error(errorMessage);
        }
      });
  }
  signout() {
    sessionStorage.clear();
    window.location = '/login';
  }
}
