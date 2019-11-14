import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardText, CardBody } from 'reactstrap';

export default function EpisodeDescription(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const { openingCrawl, episodeId, director, releaseDate } = props.episode;
  const cardDescriptionKey = { color: theme.solidButtonBackground };
  const cardDescriptionValue = { color: theme.primaryHeadingFontColor };
  const episodeDescriptionStyles = {
    maxWidth: 800,
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    borderColor: theme.cardBordercolor,
    backgroundColor: theme.cardBackground,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  const cardTextStyles = { color: theme.defaultFontColor };
  return (
    <div>
      <section>
        <Card key={episodeId} style={episodeDescriptionStyles}>
          <CardBody>
            <CardText style={cardTextStyles}>{openingCrawl}</CardText>
            <CardText style={cardTextStyles}>
              <span style={cardDescriptionKey}>Director: </span>
              <span style={cardDescriptionValue}>{director}</span>
            </CardText>
            <CardText style={cardTextStyles}>
              <span style={cardDescriptionKey}>Relase Date: </span>
              <span style={cardDescriptionValue}>{releaseDate}</span>
            </CardText>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
