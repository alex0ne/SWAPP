import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardText, CardBody } from 'reactstrap';

export default function EpisodeDescription(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const { openingCrawl, episodeId, director, releaseDate } = props.episode;
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
            <CardText style={cardTextStyles}>Director: {director}</CardText>
            <CardText style={cardTextStyles}>
              Relase Date: {releaseDate}
            </CardText>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
