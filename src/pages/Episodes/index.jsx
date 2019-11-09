import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';

import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class Episodes extends React.Component {
  state = {
    episodes: []
  };

  api = new Api();

  async componentDidMount() {
    const episodes = await this.api.getEpisodes();
    this.setState({ episodes });
  }

  render() {
    const theme = this.props.theme.styles;
    const episodesContainerStyles = {
      backgroundColor: theme.defaultBackground
    };
    const episodesWrapperStyles = {
      maxWidth: 1150,
      margin: 'auto',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: theme.defaultBackground
    };
    const episodeCardStyles = {
      maxWidth: 300,
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      borderColor: theme.cardBordercolor,
      backgroundColor: theme.cardBackground
    };
    const episodeLinkStyles = { textDecoration: 'none' };
    const cardImageStyles = { borderRadius: '8px 8px 0 0' };
    const cardTitleStyles = {
      color: theme.primaryHeadingFontColor,
      fontFamily: 'SF Distant Galaxy'
    };
    const cardTextStyles = { color: theme.defaultFontColor };
    return (
      <div style={episodesContainerStyles}>
        <div style={episodesWrapperStyles}>
          {this.state.episodes.map(episode => (
            <Card key={episode.node.id} style={episodeCardStyles}>
              <Link
                style={episodeLinkStyles}
                to={`/episodes/${episode.node.id}`}>
                <CardImg
                  top
                  width='100%'
                  src={episode.node.image}
                  alt={episode.node.title}
                  style={cardImageStyles}
                />
                <CardBody>
                  <CardTitle style={cardTitleStyles}>
                    {episode.node.title}
                  </CardTitle>
                  <CardText style={cardTextStyles}>
                    {episode.node.openingCrawl.slice(0, 200)}...
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default withTheme(Episodes);
