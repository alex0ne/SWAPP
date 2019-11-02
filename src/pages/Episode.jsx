import React from 'react';
import Api from '../services/Api';
import { Link } from 'react-router-dom';

export default class Episode extends React.Component {
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
    return (
      <div>
        <section>
          <img width='500' src={image} alt={title} />
          <h2>Star Wars: Episode {episodeId}</h2>
          <h3>{title}</h3>
        </section>
        <section>
          <p>{openingCrawl}</p>
          <p>Director: {director}</p>
          <p>Relase Date: {releaseDate}</p>
        </section>
        <section>
          {people &&
            people.edges.map(character => (
              <li key={character.node.id}>
                <Link to={`/characters/${character.node.id}`}>
                  <img
                    width='55'
                    src={character.node.image}
                    alt={character.node.name}
                  />
                  {character.node.name}
                </Link>
              </li>
            ))}
          {people && this.state.episode.people.pageInfo.hasNextPage && (
            <button onClick={() => this.loadMoreCharacters()}>Load More</button>
          )}
        </section>
      </div>
    );
  }
}
