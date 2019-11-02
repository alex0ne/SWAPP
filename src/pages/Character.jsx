import React from 'react';
import Api from '../services/Api';
import { Link } from 'react-router-dom';
export default class Character extends React.Component {
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
    return (
      <div>
        <h2>{name}</h2>
        <hr />
        <section>
          <h3>{name}</h3>
          <img width='330' src={image} alt={name} />
          <p>Height: {height}</p>
          <p>Weight: {mass}</p>
          {species && <p>Species: {species.name}</p>}
          {homeworld && <p>Home World: {homeworld.name}</p>}
        </section>
        <section>
          <h3>Piloted Starsships</h3>
          {starships &&
            starships.map(starship => {
              const { id, name, image } = starship.node;
              return (
                <li key={id}>
                  <Link to={`/starships/${id}`}>
                    <img width='55' src={image} alt={name} />
                    {name} <br />
                  </Link>
                </li>
              );
            })}
        </section>
      </div>
    );
  }
}
