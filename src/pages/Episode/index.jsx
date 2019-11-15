import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import EpisodeHeader from './EpisodeHeader';
import EpisodeDescription from './EpisodeDescription';
import CharactersList from './CharactersList';
import Loading from '../../common/Loading';

class Episode extends React.Component {
  state = {
    episode: {},
    isLoading: true
  };

  api = new Api();

  async componentDidMount() {
    const id = window.location.pathname.slice(
      window.location.pathname.length - 7
    );
    const episode = await this.api.getEpisode(id);
    this.setState({ episode, isLoading: false });
  }

  loadMoreCharacters = async () => {
    const id = window.location.pathname.slice(
      window.location.pathname.length - 7
    );
    const currentCharactersCount = this.state.episode.people.edges.length;
    const episode = await this.api.loadMoreCharactersForEpisode(
      id,
      currentCharactersCount
    );
    this.setState({ episode });
  };

  render() {
    const theme = this.props.theme.styles;
    const episodeContainerStyles = {
      backgroundColor: theme.defaultBackground,
      height: '100%',
      padding: '1rem'
    };

    return this.state.isLoading ? (
      <Loading />
    ) : (
      <div style={episodeContainerStyles}>
        <EpisodeHeader episode={this.state.episode} />
        <EpisodeDescription episode={this.state.episode} />
        <CharactersList
          episode={this.state.episode}
          loadMore={this.loadMoreCharacters}
        />
      </div>
    );
  }
}
export default withTheme(Episode);
