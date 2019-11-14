import React from 'react';
import Api from '../../services/Api';
import { withTheme } from 'styled-components';
import { Row, Col } from 'reactstrap';
import StarshipChart from './StarshipChart';
import StarshipCard from './StarshipCard';
import Loading from '../../common/Loading';

class Starship extends React.Component {
  state = {
    currentStarship: {},
    chartData: []
  };
  api = new Api();
  async componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const starshipId = locationArray[locationArray.length - 1];
    const currentStarship = await this.api.getStarship(starshipId);
    const allStarships = await this.api.getAllStarships();
    const starshipsInSameClass = allStarships
      .map(item => {
        return item.node;
      })
      .filter(item => item.starshipClass === currentStarship.starshipClass)
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
    const chartData = this.generateChartData(
      starshipsInSameClass,
      currentStarship
    );

    this.setState({
      currentStarship,
      chartData
    });
  }

  generateChartData = (starshipsInSameClass, currentStarship) => {
    const costValues = this.calculateValues(
      starshipsInSameClass,
      currentStarship,
      'cost'
    );
    const maxAtmosphericSpeedValues = this.calculateValues(
      starshipsInSameClass,
      currentStarship,
      'maxAtmosphericSpeed'
    );
    const maxMLPerHourValues = this.calculateValues(
      starshipsInSameClass,
      currentStarship,
      'maxMLPerHour'
    );
    const hyperdriveRatingValues = this.calculateValues(
      starshipsInSameClass,
      currentStarship,
      'hyperdriveRating'
    );
    const crewValues = this.calculateValues(
      starshipsInSameClass,
      currentStarship,
      'crew'
    );

    return [
      { ...maxAtmosphericSpeedValues, value: 'Max Atm. Speed' },
      { ...maxMLPerHourValues, value: 'Max ML/h' },
      { ...hyperdriveRatingValues, value: 'HyperD Rat.' },
      { ...crewValues, value: 'Crew' },
      { ...costValues, value: 'Cost' }
    ];
  };

  calculateValues = (starshipsInSameClass, currentStarship, criteria) => {
    const maxValue = Math.max(
      ...starshipsInSameClass.map(item => item[criteria])
    );
    const minValue = Math.min(
      ...starshipsInSameClass.map(item => item[criteria])
    );

    return {
      min: 0,
      max: 5,
      current: currentStarship[criteria]
        ? this.scaleDown(minValue, maxValue, currentStarship[criteria])
        : 0
    };
  };

  scaleDown = (min, max, current) => {
    if (min !== max) {
      const percent = (current - max) / (max - min);
      const output = percent * (5 - 0) + 0;
      return output;
    } else {
      return ((current - max) / (max - 0)) * (5 - 0) + 0;
    }
  };

  render() {
    const { model, name } = this.state.currentStarship;
    const theme = this.props.theme.styles;
    const starshipPageContainderStyles = {
      padding: '1rem',
      paddingTop: '3rem',
      backgroundColor: theme.defaultBackground,
      paddingBottom: '5rem',
      color: theme.defaultFontColor
    };
    const starshipPageWrapperStyles = { maxWidth: '800px', margin: 'auto' };
    const starshipPageTitle = {
      fontFamily: 'SF Distant Galaxy',
      color: theme.primaryHeadingFontColor
    };
    const starshipPageSubtitleStyles = {
      fontFamily: 'SF Distant Galaxy',
      color: theme.solidButtonBackground,
      marginBottom: '2rem'
    };
    const starshipPageHrStyles = { borderColor: 'black' };

    return this.state.chartData.length > 0 ? (
      <div>
        <div style={starshipPageContainderStyles}>
          <div style={starshipPageWrapperStyles}>
            <h3 style={starshipPageTitle}>{name}</h3>
            <h5 style={starshipPageSubtitleStyles}>({model})</h5>
            <hr style={starshipPageHrStyles} />
            <Row>
              <Col md>
                <StarshipCard starship={this.state.currentStarship} />
              </Col>
              <Col md>
                <StarshipChart data={this.state.chartData} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}
export default withTheme(Starship);
