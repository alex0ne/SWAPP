import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col
} from 'reactstrap';

export default function EpisodeHeader(props) {
  const { image, episodeId, title } = props.episode;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const episodeCardStyles = {
    maxWidth: 800,
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    borderColor: theme.cardBordercolor,
    backgroundColor: theme.cardBackground,
    fontFamily: 'SF Distant Galaxy',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  const cardImageStyles = { borderRadius: '8px' };
  const cardTitleStyles = {
    color: theme.primaryHeadingFontColor,
    paddingTop: '5rem'
  };
  const cardTextStyles = { color: theme.defaultFontColor };

  return (
    <div>
      <Card key={episodeId} style={episodeCardStyles}>
        <Row className='no-gutters'>
          <Col md='4'>
            <CardImg
              style={cardImageStyles}
              top
              width='100%'
              src={image}
              alt={title}
            />
          </Col>
          <Col md='8'>
            <CardBody>
              <CardTitle style={cardTitleStyles}>
                <h4>Star Wars: Episode {episodeId}</h4>
              </CardTitle>
              <CardText style={cardTextStyles}>{title}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
