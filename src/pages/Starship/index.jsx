import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import {
  Card,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
  Row,
  Col
} from 'reactstrap';

import { ResponsiveRadar } from '@nivo/radar';

class Starship extends React.Component {
  state = {
    starship: {}
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const starshipId = locationArray[locationArray.length - 1];
    const starship = await this.api.getStarship(starshipId);
    this.setState({ starship });
  }

  render() {
    const {
      cost,
      crew,
      hyperdriveRating,
      maxAtmosphericSpeed,
      model,
      name,
      starshipClass,
      image
    } = this.state.starship;

    const theme = this.props.theme.styles;
    const cardDescriptionValue = { color: theme.primaryHeadingFontColor };
    const cardDescriptionKey = { color: theme.solidButtonBackground };

    const data = [
      {
        taste: 'Max Atm. Speed',
        chardonay: 84,
        carmenere: 80,
        syrah: 58
      },
      {
        taste: 'Max ML/h',
        chardonay: 56,
        carmenere: 32,
        syrah: 84
      },
      {
        taste: 'HyperD Rat.',
        chardonay: 92,
        carmenere: 99,
        syrah: 95
      },
      {
        taste: 'Crew',
        chardonay: 65,
        carmenere: 79,
        syrah: 28
      },
      {
        taste: 'Cost',
        chardonay: 57,
        carmenere: 77,
        syrah: 114
      }
    ];
    const chartTheme = {
      textColor: theme.primaryHeadingFontColor,
      fontSize: '1.1rem'
    };
    return (
      <div>
        <div
          style={{
            padding: '1rem',
            paddingTop: '3rem',
            backgroundColor: theme.defaultBackground,
            paddingBottom: '5rem',
            color: theme.defaultFontColor
          }}>
          <div style={{ maxWidth: '800px', margin: 'auto' }}>
            <h3
              style={{
                fontFamily: 'SF Distant Galaxy',
                color: theme.primaryHeadingFontColor
                // marginBottom: '2rem'
              }}>
              {name}
            </h3>
            <h5
              style={{
                fontFamily: 'SF Distant Galaxy',
                color: theme.solidButtonBackground,
                marginBottom: '2rem'
              }}>
              ({model})
            </h5>
            <hr style={{ borderColor: 'black' }} />

            <Row>
              <Col md>
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
                      <span style={cardDescriptionValue}>{starshipClass}</span>{' '}
                      <br />
                      <span style={cardDescriptionKey}>Cost:</span>{' '}
                      <span style={cardDescriptionValue}> {cost}</span> <br />
                      <span style={cardDescriptionKey}> Crew:</span>{' '}
                      <span style={cardDescriptionValue}>{crew}</span> <br />
                      <span style={cardDescriptionKey}>
                        Max Atmospheric Speed:
                      </span>{' '}
                      <span style={cardDescriptionValue}>
                        {' '}
                        {maxAtmosphericSpeed}{' '}
                      </span>{' '}
                      <br />
                      <span style={cardDescriptionKey}>
                        Hyperdrive Rating:
                      </span>{' '}
                      <span style={cardDescriptionValue}>
                        {' '}
                        {hyperdriveRating}{' '}
                      </span>{' '}
                      <br />
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md>
                <section 
                    style={{
                    fontFamily: 'SF Distant Galaxy',
                    color: theme.solidButtonBackground,
                    fontSize: '0.9rem'
                  }}>Compare to Starship Class Max</section>
                <div
                  style={{
                    height: '350px',
                    background: 'black',
                    border: 'none',
                    color: theme.primaryHeadingFontColor
                  }}>
                  <div
                    style={{
                      height: '100%',
                      display: 'grid',
                      gridTemplateColumns: '1fr 0px',
                      color: theme.primaryHeadingFontColor
                    }}>
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          margin: 'auto',
                          color: theme.primaryHeadingFontColor
                        }}>
                        <ResponsiveRadar
                          color={theme.primaryHeadingFontColor}
                          data={data}
                          keys={['chardonay']}
                          indexBy='taste'
                          maxValue='auto'
                          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                          curve='linearClosed'
                          borderWidth={2}
                          borderColor={theme.primaryHeadingFontColor}
                          gridLevels={5}
                          gridShape='circular'
                          enableDots={true}
                          dotSize={10}
                          dotColor={theme.primaryHeadingFontColor}
                          dotBorderWidth={2}
                          dotBorderColor={theme.primaryHeadingFontColor}
                          enableDotLabel={false}
                          dotLabel='value'
                          dotLabelYOffset={-12}
                          colors={theme.primaryHeadingFontColor}
                          fillOpacity={0.8}
                          blendMode='normal'
                          animate={true}
                          motionStiffness={90}
                          motionDamping={15}
                          isInteractive={false}
                          theme={chartTheme}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default withTheme(Starship);
