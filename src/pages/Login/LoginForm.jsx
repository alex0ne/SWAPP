import React from 'react';
import { AuthService } from '../../services/Auth';
import { Button, Form, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { withTheme } from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary';

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  authService = new AuthService();

  signIn = async () => {
    const response = await this.authService.signIn(
      this.state.email,
      this.state.password
    );
    if (response.error) {
      this.setState({ error: response.error });
    }
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.signIn();
  }

  render() {
    const theme = this.props.theme.styles;
    const inputStyles = {
      backgroundColor: `${theme.inputBackground}`,
      color: `${theme.inputFontColor}`,
      borderColor: `${theme.inputBorderColor}`
    };
    const cardStyles = {
      backgroundColor: `${theme.cardBackground}`,
      textAlign: 'right'
    };
    const loginButtonStyles = {
      backgroundColor: `${theme.solidButtonBackground}`,
      color: `${theme.solidButtonFontColor}`,
      fontFamily: 'SF Distant Galaxy',
      fontSize: '0.9rem'
    };
    const errorMessageStyles = {
      textAlign: 'left', color: 'tomato'
    }
    return (
      <ErrorBoundary>
        <Card body={true} style={cardStyles}>
          <CardBody>
            {this.state.error && <p style={errorMessageStyles}>{this.state.error}</p>}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  bsSize='sm'
                  type='email'
                  name='email'
                  placeholder='email'
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                  style={inputStyles}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  bsSize='sm'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                  style={inputStyles}
                />
              </FormGroup>
              <Button size='md' style={loginButtonStyles} type='submit'>
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </ErrorBoundary>
    );
  }
}
export default withTheme(Loginform);
