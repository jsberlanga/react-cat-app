import React, { Component } from 'react';
import Header from './Header';
import CatsDashboard from './CatsDashboard';
import '../styles/index.css';


class CatApp extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CatsDashboard />
      </div>
    );
  }
}

export default CatApp;
