import React, { Component } from 'react';
import { subscribe } from '../store';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

class FilterLink extends Component {
  constructor (props) {
    super(props)
    subscribe(this)
  }  
  render () {
    const { filter } = this.props
    return <Link {...this.props}
      active={this.state.visibilityFilter === filter} 
      onClick={() => setVisibilityFilter(filter)}
    />
  }
}
export default FilterLink
