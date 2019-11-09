import React from 'react';
import Api from '../services/Api';
import { withTheme } from 'styled-components';
import {
  Card,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
  Row,
  Col
} from 'reactstrap';

class Starship extends React.Component {
  state = {
    starship: {}
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const starshipId = locationArray[locationArray.length - 1];
    const starship = await this.api.getStarship(starshipId);
    this.setState({ starship });
  }

  render() {
    const {
      cost,
      crew,
      hyperdriveRating,
      maxAtmosphericSpeed,
      model,
      name,
      starshipClass,
      image
    } = this.state.starship;

    const theme = this.props.theme.styles;
    const cardDescriptionValue = { color: theme.primaryHeadingFontColor };
    const cardDescriptionKey = { color: theme.solidButtonBackground };

    return (
      <div>
        <div
          style={{
            padding: '1rem',
            paddingTop: '3rem',
            backgroundColor: theme.defaultBackground,
            paddingBottom: '5rem',
            color: theme.defaultFontColor
          }}>
          <div style={{ maxWidth: '800px', margin: 'auto' }}>
            <h3
              style={{
                fontFamily: 'SF Distant Galaxy',
                color: theme.primaryHeadingFontColor,
                // marginBottom: '2rem'
              }}>
              {name}
            </h3>
            <h5  
                style={{
                fontFamily: 'SF Distant Galaxy',
                color: theme.solidButtonBackground,
                marginBottom: '2rem'
              }}>({model})</h5>
            <hr style={{ borderColor: 'black' }} />
            <Row>
              <Col md>
                <Card
                  style={{
                    borderRadius: '8px',
                    background: theme.cardBackground
                  }}>
                  <CardBody>
                    <CardTitle
                      style={{
                        fontFamily: 'SF Distant Galaxy',
                        color: theme.primaryHeadingFontColor
                      }}>
                      {name}
                    </CardTitle>
                    <CardImg src={image} alt={name} />
                    <CardText
                      style={{
                        textAlign: 'left',
                        marginTop: '1rem',
                        color: ''
                      }}>
                      <span style={cardDescriptionKey}>Class:</span>{' '}
                      <span style={cardDescriptionValue}>{starshipClass}</span>{' '}
                      <br />
                      <span style={cardDescriptionKey}>Cost:</span>{' '}
                      <span style={cardDescriptionValue}> {cost}</span> <br />
                      <span style={cardDescriptionKey}> Crew:</span>{' '}
                      <span style={cardDescriptionValue}>{crew}</span> <br />
                      <span style={cardDescriptionKey}>
                        Max Atmospheric Speed:
                      </span>{' '}
                      <span style={cardDescriptionValue}>
                        {' '}
                        {maxAtmosphericSpeed}{' '}
                      </span>{' '}
                      <br />
                      <span style={cardDescriptionKey}>
                        Hyperdrive Rating:
                      </span>{' '}
                      <span style={cardDescriptionValue}>
                        {' '}
                        {hyperdriveRating}{' '}
                      </span>{' '}
                      <br />
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md>
                <section>Compare to Starship Class Max</section>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default withTheme(Starship);
