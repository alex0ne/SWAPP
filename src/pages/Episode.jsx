import React from 'react';
import Api from '../services/Api';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Button,
  Row,
  Col
} from 'reactstrap';

class Episode extends React.Component {
  state = {
    episode: {}
  };

  api = new Api();

  async componentDidMount() {
    const id = window.location.pathname.slice(
      window.location.pathname.length - 7
    );
    const episode = await this.api.getEpisode(id);
    this.setState({ episode });
  }

  async loadMoreCharacters() {
    const id = window.location.pathname.slice(
      window.location.pathname.length - 7
    );
    const currentCharactersCount = this.state.episode.people.edges.length;
    const episode = await this.api.loadMoreCharactersForEpisode(
      id,
      currentCharactersCount
    );
    this.setState({ episode });
  }

  render() {
    const {
      image,
      episodeId,
      title,
      openingCrawl,
      director,
      releaseDate,
      people
    } = this.state.episode;
    const theme = this.props.theme.styles;
    const episodeContainerStyles = {
      backgroundColor: theme.defaultBackground,
      height: '100%',
      padding: '1rem'
    };
    const episodeWrapperStyles = {
      maxWidth: 1000,
      margin: 'auto',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: theme.defaultBackground
    };
    const episodeCardStyles = {
      maxWidth: 800,
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      borderColor: theme.cardBordercolor,
      backgroundColor: theme.cardBackground,
      fontFamily: 'SF Distant Galaxy',
      textAlign: 'left',
      display: 'inline-block',
      verticalAlign: 'middle'
    };
    const episodeDescriptionStyles = {
      maxWidth: 800,
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      borderColor: theme.cardBordercolor,
      backgroundColor: theme.cardBackground,
      textAlign: 'left',
      display: 'inline-block',
      verticalAlign: 'middle'
    };
    const cardImageStyles = { borderRadius: '8px' };
    const cardTitleStyles = { color: theme.primaryHeadingFontColor };
    const cardTextStyles = { color: theme.defaultFontColor };
    const loadMoreButtonStyles = {
      backgroundColor: theme.solidButtonBackground,
      color: theme.solidButtonFontColor,
      border: 'none',
      fontFamily: 'SF Distant Galaxy',
      fontSize: '0.9rem',
      marginBottom: '7px'
    };
    const charactersContainerStyles = {
      backgroundColor: theme.defaultBackground,
      height: '100%',
      paddingBottom: '11rem',
    };
    const charactersWrapperStyles = {
      maxWidth: 810,
      margin: 'auto',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: theme.defaultBackground
    };
    const charactersCardStyles = {
      width: 254,
      margin: 'auto',
      marginBottom: '0.5rem',
      marginTop: '0.5rem',
      borderRadius: '8px',
      borderColor: theme.cardBordercolor,
      backgroundColor: theme.cardBackground,
      fontFamily: 'SF Distant Galaxy',
      fontSize: '0.9rem',
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle'
    };
    const charactersLinkStyles = { textDecoration: 'none' };

    return (
      <div style={episodeContainerStyles}>
        <section style={episodeWrapperStyles}>
          <Card key={episodeId} style={episodeCardStyles}>
            <Row className='no-gutters'>
              <Col md='4'>
                <CardImg
                  style={cardImageStyles}
                  top
                  width='100%'
                  src={image}
                  alt={title}
                />
              </Col>
              <Col md='8'>
                <CardBody>
                  <CardTitle style={cardTitleStyles}>
                    <h4>Star Wars: Episode {episodeId}</h4>
                  </CardTitle>
                  <CardText style={cardTextStyles}>{title}</CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </section>
        <section>
          <Card key={episodeId} style={episodeDescriptionStyles}>
            <CardBody>
              <CardText style={cardTextStyles}>{openingCrawl}</CardText>
              <CardText style={cardTextStyles}>Director: {director}</CardText>
              <CardText style={cardTextStyles}>
                Relase Date: {releaseDate}
              </CardText>
            </CardBody>
          </Card>
        </section>
        <section>
          <div style={charactersContainerStyles}>
            <div style={charactersWrapperStyles}>
              {people &&
                people.edges.map(character => {
                  const { id, image, name } = character.node;
                  return (
                    <Card key={id} style={charactersCardStyles}>
                      <Link
                        style={charactersLinkStyles}
                        to={`/characters/${id}`}>
                        <Row className='no-gutters'>
                          <Col md='4'>
                            <CardImg
                              style={cardImageStyles}
                              top
                              width='100%'
                              src={image}
                              alt={name}
                            />
                          </Col>
                          <Col md='8'>
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
            </div>
            {people && this.state.episode.people.pageInfo.hasNextPage && (
              <Button
                style={loadMoreButtonStyles}
                onClick={() => this.loadMoreCharacters()}>
                Load More
              </Button>
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default withTheme(Episode);
