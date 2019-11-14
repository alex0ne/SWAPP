import React, { useContext } from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { ThemeContext } from 'styled-components';

export default function StarshipChart(props) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const chartTheme = {
    textColor: theme.primaryHeadingFontColor,
    fontSize: 14
  };
  const starshipChartTitleStyles = {
    fontFamily: 'SF Distant Galaxy',
    color: theme.solidButtonBackground,
    fontSize: '0.9rem',
    marginTop: '2rem'
  };
  const starshipChartFragmentStyles = {
    height: '350px',
    background: 'black',
    display: 'grid',
    gridTemplateColumns: '1fr 0px',
    color: theme.primaryHeadingFontColor
  };
  const starshipChartContainerStyles = { position: 'relative' };
  const starshipChartWrapperStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 'auto',
    color: theme.primaryHeadingFontColor
  };
  return (
    <div>
      <h5 style={starshipChartTitleStyles}>Compare to Starship Class Max</h5>
      <div style={starshipChartFragmentStyles}>
        <div style={starshipChartContainerStyles}>
          <div style={starshipChartWrapperStyles}>
            <ResponsiveRadar
              color={theme.primaryHeadingFontColor}
              data={props.data}
              keys={[`current`]}
              indexBy='value'
              maxValue={10}
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
  );
}
