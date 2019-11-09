import React from 'react';
import Api from '../services/Api';
import { Link } from 'react-router-dom';
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

class Character extends React.Component {
  state = {
    character: {}
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const characterId = locationArray[locationArray.length - 1];
    const character = await this.api.getCharacter(characterId);
    this.setState({ character });
  }
  render() {
    const {
      name,
      image,
      height,
      mass,
      species,
      homeworld
    } = this.state.character;
    const starships =
      this.state.character.starships && this.state.character.starships.edges;
    const theme = this.props.theme.styles;
    const cardDescriptionValue = { color: theme.primaryHeadingFontColor };
    const cardDescriptionKey = { color: theme.solidButtonBackground };

    return (
      <div
        style={{
          padding: '1rem',
          paddingTop: '3rem',
          backgroundColor: theme.defaultBackground,
          paddingBottom: '8.5rem',
          color: theme.defaultFontColor
        }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <h3
            style={{
              fontFamily: 'SF Distant Galaxy',
              color: theme.primaryHeadingFontColor,
              marginBottom: '2rem'
            }}>
            {name}
          </h3>
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
                    style={{ textAlign: 'left', marginTop: '1rem', color: '' }}>
                    <span style={cardDescriptionKey}>Height:</span>{' '}
                    <span style={cardDescriptionValue}>{height}</span> <br />
                    <span style={cardDescriptionKey}> Weight:</span>{' '}
                    <span style={cardDescriptionValue}> {mass}</span> <br />
                    {species && (
                      <span>
                        <span style={cardDescriptionKey}> Species:</span>{' '}
                        <span style={cardDescriptionValue}>{species.name}</span>{' '}
                        <br />
                      </span>
                    )}
                    {homeworld && (
                      <span>
                        <span style={cardDescriptionKey}>Home World:</span>{' '}
                        <span style={cardDescriptionValue}>
                          {homeworld.name}
                        </span>
                      </span>
                    )}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md>
              <h5
                style={{
                  fontFamily: 'SF Distant Galaxy',
                  color: theme.solidButtonBackground,
                  marginTop: '1rem'
                }}>
                Piloted Starsships
              </h5>
              <hr style={{ borderColor: theme.defaultFontColor }} />
              {starships &&
                starships.map(starship => {
                  const { id, name, image } = starship.node;
                  const charactersCardStyles = {
                    margin: 'auto',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    borderRadius: '8px',
                    borderColor: theme.cardBordercolor,
                    backgroundColor: theme.cardBackground,
                    fontFamily: 'SF Distant Galaxy',
                    textAlign: 'center',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  };
                  const charactersLinkStyles = { textDecoration: 'none' };
                  const cardImageStyles = { borderRadius: '8px' };
                  const cardTitleStyles = {
                    color: theme.primaryHeadingFontColor,
                    textSize: '0.9rem'
                  };
                  return (
                    <Card key={id} style={charactersCardStyles}>
                      <Link
                        style={charactersLinkStyles}
                        to={`/starships/${id}`}>
                        <Row className='no-gutters'>
                          <Col md='2'>
                            <CardImg
                              style={cardImageStyles}
                              top
                              src={image}
                              alt={name}
                            />
                          </Col>
                          <Col md='10'>
                            <CardBody>
                              <CardText style={cardTitleStyles}>
                                {name}
                              </CardText>
                            </CardBody>
                          </Col>
                        </Row>
                      </Link>
                    </Card>
                  );
                })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withTheme(Character);
