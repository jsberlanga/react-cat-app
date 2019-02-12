import React from 'react';
import CatForm from './CatForm';
import Cat from './Cat';

export default class EditableCat extends React.Component {
  state = {
    editFormOpen: false
  }

  render() {
    if (this.state.editFormOpen) {
      return (
        <CatForm
          id={this.props.id}
          name={this.props.name}
          breed={this.props.breed}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
        />
      )
    } else {
      return (
        <Cat
          name={this.props.name}
          breed={this.props.breed}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
        />
      )
    }
  }
}