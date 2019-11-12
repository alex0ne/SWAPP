import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

export default function CharacterCard(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const {
    name,
    image,
    height,
    mass,
    species,
    homeworld
  } = props.character;
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
          <CardText style={{ textAlign: 'left', marginTop: '1rem', color: '' }}>
            <span style={cardDescriptionKey}>Height:</span>{' '}
            <span style={cardDescriptionValue}>{height}</span> <br />
            <span style={cardDescriptionKey}> Weight:</span>{' '}
            <span style={cardDescriptionValue}> {mass}</span> <br />
            {species && (
              <span>
                <span style={cardDescriptionKey}> Species:</span>{' '}
                <span style={cardDescriptionValue}>{species.name}</span> <br />
              </span>
            )}
            {homeworld && (
              <span>
                <span style={cardDescriptionKey}>Home World:</span>{' '}
                <span style={cardDescriptionValue}>{homeworld.name}</span>
              </span>
            )}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
