import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import { Row, Col } from 'reactstrap';
import StarshipChart from './StarshipChart';
import StarshipCard from './StarshipCard';

class Starship extends React.Component {
  state = {
    starship: {},
    data: []
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const starshipId = locationArray[locationArray.length - 1];
    const starship = await this.api.getStarship(starshipId);
    const allStarships = await this.api.getAllStarships();
    const chartData = allStarships
      .map(item => {
        return item.node;
      })
      .filter(item => item.starshipClass === starship.starshipClass)
      .map(item => {
        return {
          id: item.id,
          cost: item.cost,
          maxAtmosphericSpeed: item.maxAtmosphericSpeed,
          maxMLPerHour: item.maxMLPerHour,
          hyperdriveRating: item.hyperdriveRating,
          crew: item.crew
        };
      });

    const maxCostValue = Math.max(...chartData.map(item => item.cost));
    const minCostValue = Math.min(...chartData.map(item => item.cost));
    let costValues = {
      value: 'Cost',
      min: Number(minCostValue.toString().slice(0, 2)),
      max: Number(maxCostValue.toString().slice(0, 2)),
      current: starship.cost ? Number(starship.cost.toString().slice(0, 2)) : 0
    };

    const maxAtmosphericSpeedValue = Math.max(
      ...chartData.map(item => item.maxAtmosphericSpeed)
    );
    const minAtmosphericSpeedValue = Math.min(
      ...chartData.map(item => item.maxAtmosphericSpeed)
    );
    let maxAtmosphericSpeedValues = {
      value: 'Max Atm. Speed',
      min: Number(minAtmosphericSpeedValue.toString().slice(0, 2)),
      max: Number(maxAtmosphericSpeedValue.toString().slice(0, 2)),
      current: starship.maxAtmosphericSpeed
        ? Number(starship.maxAtmosphericSpeed.toString().slice(0, 2))
        : 0
    };

    const maxMLPerHourValue = Math.max(
      ...chartData.map(item => item.maxMLPerHour)
    );
    const minMLPerHourValue = Math.min(
      ...chartData.map(item => item.maxMLPerHour)
    );
    let maxMLPerHour = {
      value: 'Max ML/h',
      min: Number(minMLPerHourValue.toString().slice(0, 2)),
      max: Number(maxMLPerHourValue.toString().slice(0, 2)),
      current: starship.maxMLPerHour
        ? Number(starship.maxMLPerHour.toString().slice(0, 2))
        : 0
    };

    const maxHyperdriveRatingValue = Math.max(
      ...chartData.map(item => item.hyperdriveRating)
    );
    const minHyperdriveRatingValue = Math.min(
      ...chartData.map(item => item.hyperdriveRating)
    );
    let hyperdriveRating = {
      value: 'HyperD Rat.',
      min: Number(minHyperdriveRatingValue.toString().slice(0, 2)),
      max: Number(maxHyperdriveRatingValue.toString().slice(0, 2)),
      current: starship.maxAtmosphericSpeed
        ? Number(starship.hyperdriveRating.toString().slice(0, 2))
        : 0
    };

    const maxCrewValue = Math.max(...chartData.map(item => item.crew));
    const minCrewalue = Math.min(...chartData.map(item => item.crew));
    let crew = {
      value: 'Crew',
      min: Number(minCrewalue.toString().slice(0, 2)),
      max: Number(maxCrewValue.toString().slice(0, 2)),
      current: starship.crew ? Number(starship.crew.toString().slice(0, 2)) : 0
    };

    const data = [
      maxAtmosphericSpeedValues,
      maxMLPerHour,
      hyperdriveRating,
      crew,
      costValues
    ];

    this.setState({
      starship,
      data
    });
  }

  render() {
    const {
      model,
      name,
    } = this.state.starship;

    const theme = this.props.theme.styles;

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
                <StarshipCard starship={this.state.starship} />
              </Col>
              <Col md>
                <StarshipChart data={this.state.data} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default withTheme(Starship);
