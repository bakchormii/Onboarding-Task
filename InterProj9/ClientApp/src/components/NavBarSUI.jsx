import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class NavBarSUI extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="main-container">
        <Menu.Item  
          as={NavLink} to="/"
          name='React'
          active={activeItem === 'React'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/customer"
          name='Customers'
          active={activeItem === 'customer'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/Product"
          name='Products'
          active={activeItem === 'Product'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/Store"
          name='Stores'
          active={activeItem === 'Store'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/Sale"
          name='Sales'
          active={activeItem === 'Sale'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/dashboard"
          name='dashboards'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}