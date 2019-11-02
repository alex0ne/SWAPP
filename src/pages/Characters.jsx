import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/Api';
export default class Characters extends React.Component {
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
    return (
      <div>
        Characters page
        <div>
          {characters &&
            characters.map(character => {
              const { id, image, name } = character.node;
              return (
                <li key={id}>
                  <Link to={`/characters/${id}`}>
                    <img width='55' src={image} alt={name} />
                    {name}
                  </Link>
                </li>
              );
            })}
        </div>
        {this.state.characters.pageInfo &&
          this.state.characters.pageInfo.hasNextPage && (
            <button onClick={() => this.loadMoreCharacters()}>Load More</button>
          )}
      </div>
    );
  }
}
