import React from 'react';
import EpisodesService from '../services/Episodes';

export default class Episodes extends React.Component {
  state = {
    episodes: []
  };

  episodesService = new EpisodesService();

  async componentDidMount() {
    const episodes = await this.episodesService.getEpisodes();
    this.setState({ episodes });
  }

  render() {
    return (
      <div>
        Episodes page
        {this.state.episodes.map(episode => (
          <li key={episode.node.episodeId}>
            episode: {episode.node.episodeId} <br />
            title: {episode.node.title} <br />
            <img width='300px' src={episode.node.image} alt={episode.node.title} />
          </li>
        ))}
      </div>
    );
  }
}
