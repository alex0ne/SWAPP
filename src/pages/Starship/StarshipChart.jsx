import React, { useContext }  from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { ThemeContext } from 'styled-components';


export default function StarshipChart(props) {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.styles;
    const chartTheme = {
        textColor: theme.primaryHeadingFontColor,
        fontSize: 14
      };
  return (
    <div>
      <section
        style={{
          fontFamily: 'SF Distant Galaxy',
          color: theme.solidButtonBackground,
          fontSize: '0.9rem'
        }}>
        Compare to Starship Class Max
      </section>
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
                data={props.data}
                keys={[`current`]}
                indexBy='value'
                maxValue={100}
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
    </div>
  );
}
