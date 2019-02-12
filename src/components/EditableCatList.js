import React, { Component } from 'react';
import EditableCat from './EditableCat';

export default class EditableCatList extends Component {
  render() {
    const cats = this.props.cats.map((cat) => (
      <EditableCat
        key={cat.id}
        id={cat.id}
        name={cat.name}
        breed={cat.breed}
        description={cat.description}
        imageUrl={cat.imageUrl}
      />
    ))
    return (
      <div>
        { cats }
      </div>
    )
  }
}