import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';

export default function StarShipsList(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const starships = props.starships;
  const starshipsListTitleStyles = {
    fontFamily: 'SF Distant Galaxy',
    color: theme.solidButtonBackground,
    marginTop: '1rem'
  };
  const starshipsListHrStyles = { borderColor: theme.defaultFontColor };
  const charactersCardStyles = {
    margin: 'auto',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '8px',
    borderColor: theme.cardBordercolor,
    backgroundColor: theme.cardBackground,
    fontFamily: 'SF Distant Galaxy',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  const charactersLinkStyles = { textDecoration: 'none' };
  const cardImageStyles = { borderRadius: '8px' };
  const cardTitleStyles = {
    color: theme.primaryHeadingFontColor,
    textSize: '0.9rem'
  };
  return (
    <div>
      <h5 style={starshipsListTitleStyles}>Piloted Starsships</h5>
      <hr style={starshipsListHrStyles} />
      {starships &&
        starships.map(starship => {
          const { id, name, image } = starship.node;
          return (
            <Card key={id} style={charactersCardStyles}>
              <Link style={charactersLinkStyles} to={`/starships/${id}`}>
                <Row className='no-gutters'>
                  <Col md='2'>
                    <CardImg
                      style={cardImageStyles}
                      top
                      src={image}
                      alt={name}
                    />
                  </Col>
                  <Col md='10'>
                    <CardBody>
                      <CardText style={cardTitleStyles}>{name}</CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Link>
            </Card>
          );
        })}
    </div>
  );
}
