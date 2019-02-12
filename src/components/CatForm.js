import React, { Component } from 'react';

export default class CatForm extends Component {
  state = {
      name: '',
      breed: '',
      description: '',
      imageUrl: ''
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleBreedChange = (e) => {
    this.setState({ breed: e.target.value })
  }
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value })
  }
  handleImageUrlChange = (e) => {
    this.setState({ imageUrl: e.target.value })
  }
  handleFormSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      name: this.state.name,
      breed: this.state.breed,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    })
  }
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Cat Name</label>
              <input
                type='text'
                onChange={this.handleNameChange}
                value={this.state.name}
              />
            </div>
            <div className='field'>
              <label>Cat Breed</label>
              <input
                type='text'
                onChange={this.handleBreedChange}
                value={this.state.breed}
              />
            </div>
            <div className='field'>
              <label>Description</label>
              <input
                type='text'
                onChange={this.handleDescriptionChange}
                value={this.state.description}
              />
              </div>
              <div className='field'>
              <label>Image URL</label>
              <input
                type='text'
                onChange={this.handleImageUrlChange}
                value={this.state.imageUrl}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
              onClick={this.handleFormSubmit}
              className='ui basic green button'>
              Add
              </button>
              <button
                onClick={this.props.onFormClose}
                className='ui basic red button'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}