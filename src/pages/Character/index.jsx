import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import { Row, Col } from 'reactstrap';
import CharacterCard from './CharacterCard';
import StarShipsList from './StarShipsList';

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
    const { name } = this.state.character;
    const theme = this.props.theme.styles;
    const starships =
      this.state.character.starships && this.state.character.starships.edges;
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
              <CharacterCard character={this.state.character} />
            </Col>
            <Col md>
              <StarShipsList starships={starships} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withTheme(Character);
