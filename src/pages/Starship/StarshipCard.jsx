import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

export default function StarshipCard(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const {
    cost,
    crew,
    hyperdriveRating,
    maxAtmosphericSpeed,
    name,
    starshipClass,
    image
  } = props.starship;

  const cardDescriptionValue = { color: theme.primaryHeadingFontColor };
  const cardDescriptionKey = { color: theme.solidButtonBackground };
  return (
    <div>
      <Card
        style={{
          borderRadius: '8px',
          background: theme.cardBackground
        }}>
        <CardBody>
          <CardTitle
            style={{
              fontFamily: 'SF Distant Galaxy',
              color: theme.primaryHeadingFontColor
            }}>
            {name}
          </CardTitle>
          <CardImg src={image} alt={name} />
          <CardText
            style={{
              textAlign: 'left',
              marginTop: '1rem',
              color: ''
            }}>
            <span style={cardDescriptionKey}>Class:</span>{' '}
            <span style={cardDescriptionValue}>{starshipClass}</span> <br />
            <span style={cardDescriptionKey}>Cost:</span>{' '}
            <span style={cardDescriptionValue}> {cost}</span> <br />
            <span style={cardDescriptionKey}> Crew:</span>{' '}
            <span style={cardDescriptionValue}>{crew}</span> <br />
            <span style={cardDescriptionKey}>Max Atmospheric Speed:</span>{' '}
            <span style={cardDescriptionValue}> {maxAtmosphericSpeed} </span>{' '}
            <br />
            <span style={cardDescriptionKey}>Hyperdrive Rating:</span>{' '}
            <span style={cardDescriptionValue}> {hyperdriveRating} </span>{' '}
            <br />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
