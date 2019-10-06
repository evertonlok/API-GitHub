import React, { Component } from 'react'

export default class DetailRepo extends Component {
  render() {
      const {detail}=this.props
    return (
      <div>
        <h1>{detail.language}</h1>
      </div>
    )
  }
}
