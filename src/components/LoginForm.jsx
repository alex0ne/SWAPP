import React from 'react';
import { AuthService } from '../services/Auth';
import { Button, Form, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { withTheme } from 'styled-components';


class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  authService = new AuthService();

  signIn = async () => {
    await this.authService.signIn(this.state.email, this.state.password);
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
    return (
      <div style={{ textAlign: 'right' }}>
        <Card body={true} style={{backgroundColor: `${this.props.theme.cardBackground}`}} >
          <CardBody>
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
                  style={{
                    backgroundColor: `${this.props.theme.inputBackground}`,
                    color: `${this.props.theme.inputFontColor}`,
                    borderColor: `${this.props.theme.inputBorderColor}`
                  }}
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
                  style={{
                    backgroundColor: `${this.props.theme.inputBackground}`,
                    color: `${this.props.theme.inputFontColor}`,
                    borderColor: `${this.props.theme.inputBorderColor}`
                  }}
                />
              </FormGroup>
              <Button size='md' style={{
                backgroundColor:`${this.props.theme.solidButtonBackground}`, 
                color:`${this.props.theme.solidButtonFontColor}`, 
                fontWeight: '900'
                }} type='submit'>Login</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default withTheme(Loginform)