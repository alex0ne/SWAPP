import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import Loading from '../../common/Loading';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  Row,
  Col
} from 'reactstrap';

class Characters extends React.Component {
  state = {
    characters: {}
  };
  api = new Api();
  async componentDidMount() {
    const characters = await this.api.getCharacters();
    this.setState({ characters });
  }
  async loadMoreCharacters() {
    const currentCharactersCount = this.state.characters.edges.length;
    const characters = await this.api.loadMoreCharacters(
      currentCharactersCount
    );
    this.setState({ characters });
  }

  render() {
    const characters = this.state.characters.edges;
    const theme = this.props.theme.styles;
    const charactersContainerStyles = {
      backgroundColor: theme.defaultBackground,
      height: '100%',
      paddingBottom: '11rem'
    };
    const charactersWrapperStyles = {
      maxWidth: 1000,
      margin: 'auto',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: theme.defaultBackground
    };
    const charactersCardStyles = {
      width: 300,
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
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
    const cardTitleStyles = { color: theme.primaryHeadingFontColor };
    const loadMoreButtonStyles = {
      backgroundColor: theme.solidButtonBackground,
      color: theme.solidButtonFontColor,
      border: 'none',
      fontFamily: 'SF Distant Galaxy',
      fontSize: '0.9rem',
      marginBottom: '7px'
    };
    return this.state.characters.edges ? (
      <div style={charactersContainerStyles}>
        <div style={charactersWrapperStyles}>
          {characters &&
            characters.map(character => {
              const { id, image, name } = character.node;
              return (
                <Card key={id} style={charactersCardStyles}>
                  <Link style={charactersLinkStyles} to={`/characters/${id}`}>
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
                          <CardText style={cardTitleStyles}>{name}</CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Link>
                </Card>
              );
            })}
        </div>
        {this.state.characters.pageInfo &&
          this.state.characters.pageInfo.hasNextPage && (
            <Button
              style={loadMoreButtonStyles}
              onClick={() => this.loadMoreCharacters()}>
              Load More
            </Button>
          )}
      </div>
    ): <Loading/>
  }
}
export default withTheme(Characters);
