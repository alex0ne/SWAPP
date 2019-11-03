import { withTheme } from 'styled-components';
import React from 'react';

class ThemeProvider extends React.Component {
    render() {
        console.log('Current theme: ', this.props.theme);
        return (this.props.children)
        }
}

export default withTheme(ThemeProvider);