import React from 'react'
import Button from './button'
import {store, set_visibility_filter} from '../reducers/store'

export default class extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render () {
    const props = this.props
    const state = store.getState()
    return (
      <Button 
        active={state.visibilityFilter !== props.filter}
        onClick={() => set_visibility_filter(props.filter)}
      >
        {props.children}
      </Button>
  )
  }
}