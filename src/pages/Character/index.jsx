import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import { Row, Col } from 'reactstrap';
import CharacterCard from './CharacterCard';
import StarshipsList from './StarshipsList';
import Loading from '../../common/Loading';

class Character extends React.Component {
  state = {
    character: {},
    isLoading: true
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const characterId = locationArray[locationArray.length - 1];
    const character = await this.api.getCharacter(characterId);
    this.setState({ character, isLoading: false });
  }
  render() {
    const name = this.state.character.name;
    const theme = this.props.theme.styles;
    const starships =
      this.state.character.starships && this.state.character.starships.edges;
    const characterPageContainer = {
      padding: '1rem',
      paddingTop: '3rem',
      backgroundColor: theme.defaultBackground,
      paddingBottom: '8.5rem',
      color: theme.defaultFontColor
    };
    const characterPateWrapper = { maxWidth: '800px', margin: 'auto' };
    const characterPageTitle = {
      fontFamily: 'SF Distant Galaxy',
      color: theme.primaryHeadingFontColor,
      marginBottom: '2rem'
    };
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <div style={characterPageContainer}>
        <div style={characterPateWrapper}>
          <h3 style={characterPageTitle}>{name}</h3>
          <hr style={{ borderColor: 'black' }} />
          <Row>
            <Col md>
              <CharacterCard character={this.state.character} />
            </Col>
            <Col md>
              <StarshipsList starships={starships} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withTheme(Character);
