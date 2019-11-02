import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/Api';

export default class Episodes extends React.Component {
  state = {
    episodes: []
  };

  api = new Api();

  async componentDidMount() {
    const episodes = await this.api.getEpisodes();    
    this.setState({ episodes });
  }

  render() {
    return (
      <div>
        Episodes page
        {this.state.episodes.map(episode => (
          <li key={episode.node.episodeId}>
            <img width='300px' src={episode.node.image} alt={episode.node.title} /> <br />
            episode: {episode.node.episodeId} <br />
            title: {episode.node.title} <br />
            description: {episode.node.openingCrawl} <br />
            <Link to={`/episodes/${episode.node.id}`}>More...</Link>
          </li>
        ))}
      </div>
    );
  }
}
