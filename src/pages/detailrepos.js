import React, { Component } from 'react'
import api from '../services/api'
import DetailRepo from '../components/DetailRepo'
export default class detailrepos extends Component {
  state=
  {
    detailrepo:''
  }
  async componentDidMount()
  {
    const {user,nome} = this.props.match.params
    const response=await api.get(`detail/${user}/${nome}`)
    this.setState({detailrepo:response.data})
  }
  render() {
    return (
      <div>
        <DetailRepo   detail={this.state.detailrepo}/>
      </div>
    )
  }
}
