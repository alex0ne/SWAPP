import React from 'react';
import Api from '../services/Api';

export default class Starship extends React.Component {
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

    return (
      <div>
        <h2>{name}</h2>
        <h3>({model})</h3>
        <hr />
        <section>
          <h4>{name}</h4> <br />
          <img width='250' src={image} alt={name} />
          <p>Class: {starshipClass}</p>
          <p>Cost: {cost}</p>
          <p>Crew: {crew}</p>
          <p>Max Atmospheric Speed: {maxAtmosphericSpeed}</p>
          <p>Hyperdrive Rating: {hyperdriveRating}</p>
        </section>
        <section>Compare to Starship Class Max</section>
      </div>
    );
  }
}
