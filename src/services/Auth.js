import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export class AuthService {
  isAuthenticated = sessionStorage.token ? true : false;
  response = '';
  error = '';
  async signIn(username, password) {
    const client = new ApolloClient({
      uri: 'https://swapp.st6.io/graphql'
    });
    await client
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
        this.response = 'success';
      })
      .catch(err => {
        if (err.networkError) {
          const errorMessage = err.networkError.message;
          this.error = errorMessage;
          console.error(errorMessage);
        } else {
          const errorMessage = err.graphQLErrors[0].message;
          console.error(errorMessage);
          this.error = errorMessage;
        }
      });
    return { response: this.response, error: this.error };
  }
  signout() {
    sessionStorage.clear();
    window.location = '/login';
  }
}
