import React from 'react';
import { Menu } from 'semantic-ui-react'


export default class Header extends React.Component {
  state = {}
  handleClickItem = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  render() {
    return (
      <Menu>
        <Menu.Item header ><h2>Get a Cat</h2></Menu.Item>
        <Menu.Item
          name='dashboard'
          active={this.state.activeItem === 'dashboard'}
          onClick={this.handleClickItem}
          className="headerItem"
        />
        <Menu.Item
          name='addACat'
          active={this.state.activeItem === 'addACat?'}
          onClick={this.handleClickItem}
          className="headerItem"
        />
        <Menu.Item
          icon="sign in"
          position='right'
          name='signIn'
          active={this.state.activeItem === 'signIn'}
          onClick={this.handleClickItem}
          className="headerItem"
        />
        <Menu.Item
          icon="user plus"
          name='signUp'
          active={this.state.activeItem === 'signUp'}
          onClick={this.handleClickItem}
          className="headerItem"
        />
      </Menu>
    )
  }
}