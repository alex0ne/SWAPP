import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  Row,
  Col
} from 'reactstrap';

export default function CharactersList(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const { people } = props.episode;
  const cardImageStyles = { borderRadius: '8px' };
  const cardTitleStyles = { color: theme.primaryHeadingFontColor };
  const loadMoreButtonStyles = {
    backgroundColor: theme.solidButtonBackground,
    color: theme.solidButtonFontColor,
    border: 'none',
    fontFamily: 'SF Distant Galaxy',
    fontSize: '0.9rem',
    marginBottom: '7px'
  };
  const charactersContainerStyles = {
    backgroundColor: theme.defaultBackground,
    height: '100%',
    paddingBottom: '1rem'
  };
  const charactersWrapperStyles = {
    maxWidth: 810,
    margin: 'auto',
    paddingBottom: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
    backgroundColor: theme.defaultBackground
  };
  const charactersCardStyles = {
    borderRadius: '8px',
    borderColor: theme.cardBordercolor,
    backgroundColor: theme.cardBackground,
    fontFamily: 'SF Distant Galaxy',
    fontSize: '0.9rem',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  const charactersLinkStyles = { textDecoration: 'none' };
  return (
    <div>
      <section>
        <div style={charactersContainerStyles}>
          <div style={charactersWrapperStyles}>
            {people &&
              people.edges.map(character => {
                const { id, image, name } = character.node;
                return (
                  <Card
                    key={id}
                    className='charactersListCard'
                    style={charactersCardStyles}>
                    <Link style={charactersLinkStyles} to={`/characters/${id}`}>
                      <Row className='no-gutters'>
                        <Col md='4'>
                          <CardImg
                            style={cardImageStyles}
                            top
                            width='90%'
                            src={image}
                            alt={name}
                          />
                        </Col>
                        <Col md='8'>
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
          {people && props.episode.people.pageInfo.hasNextPage && (
            <Button
              style={loadMoreButtonStyles}
              onClick={() => props.loadMore()}>
              Load More
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
