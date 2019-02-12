import React, { Component } from 'react';
import CatForm from './CatForm';
import { } from 'semantic-ui-react'

export default class SwitchableForm extends Component {
  state = {
    isFormOpen: false
  }
  handleFormOpen = () => {
    this.setState(() => ({ isFormOpen: true}))
  }
  handleFormClose = () => {
    this.setState(() => ({ isFormOpen: false}))
  }
  handleFormSubmit = (cat) => {
    this.props.onFormSubmit(cat)
    this.setState(() => ({ isFormOpen: false}))
  }
  render() {
    if (this.state.isFormOpen) {
      return (
        <CatForm
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      )
    } else {
      return (
        <div>
          <div className='ui centered card'>
            <div className='content'>
              <button
                onClick={this.handleFormOpen}
                className='ui basic button icon'>
                <i className='plus icon' />
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}