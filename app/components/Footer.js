import React, { Component, PropTypes } from 'react'
import { VisibilityFilters } from '../actions/actions'

class Footer extends Component {
  renderFilter(filter, name) {
    if(filter === this.props.filter) {
      return name
    }

    return (
      <a
       href="#"
       onClick={ () => this.props.onFilterClick(filter) }
       >
        { name }
      </a>
    )
  }

  render() {
    let { filter, onFilterClick } = this.props
    return (
      <p>
        Show: 
        { ' ' }
        { this.renderFilter(VisibilityFilters.SHOW_ALL, 'All') }
        { ',' }
        { this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed') }
        { ',' }
        { this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active') }
      </p>
    )
  }
}

export default Footer