import React, { Component } from 'react';
import EditableCatList from './EditableCatList';
import SwitchableForm from './SwitchableForm';
import uuid from "uuid";

export default class CatsDashboard extends Component {
  state = {
    cats: [
    {
      id: uuid.v4(),
      name: 'Wilson',
      breed: 'Siberian Cat',
      description: 'Wilsonie is an engineer.',
      imageUrl: 'https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80'
    },
    {
      id: uuid.v4(),
      name: 'Blackie',
      breed: 'European Cat',
      description: 'Blackie is a teacher.',
      imageUrl: 'https://images.unsplash.com/photo-1548676924-48e71ceac151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
  ]
  }
  onFormSubmit = (cat) => {
    this.setState({
      cats: this.state.cats.concat(cat)
    })
  }
  render() {
    return (
      <div>
        <EditableCatList
          cats={this.state.cats}
        />
        <SwitchableForm
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    )
  }
}