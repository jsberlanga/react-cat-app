import React, { Component } from 'react';
import CatsDashboard from './CatsDashboard';
import '../styles/index.css';
import { Grid } from 'semantic-ui-react'

class CatApp extends Component {
  render() {
    return (
      <div>
          <h1>The Cat App</h1>
          <Grid centered columns={2}>
            <CatsDashboard />
          </Grid>
      </div>
    );
  }
}

export default CatApp;
