import React, { Component } from 'react';
import { Icon, Card, Image } from 'semantic-ui-react'

export default class Cat extends Component {
  render() {
    return (
      <div className='ui centered card'>
        <Card>
          <Image src={this.props.imageUrl} />
          <Card.Content>
            <Card.Header name="name">{this.props.name}</Card.Header>
            <Card.Meta name="breed"><span>{this.props.breed}</span></Card.Meta>
            <Card.Description>
              {this.props.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className='right floated handshake outline icon'>
              <Icon name='handshake outline' size='big' />
            </span>
            <div className="ui labeled button">
              <div className="ui red button">
                <i className="heart icon"></i> Like
              </div>
              <a className="ui basic red left pointing label">
                1,048
              </a>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}