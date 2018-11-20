import React, { Component } from 'react';
import { store } from '../store/store';
import Link from './Link';

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return(
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    )
  }
}
export default FilterLink;
