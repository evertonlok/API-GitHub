import React, { Component } from 'react'
import api from '../services/api'
import Perfil from '../components/Perfil'
export default class perfil extends Component {
    state={
        repos:[],
    }
    async componentDidMount()
    {
        const user=localStorage.getItem('usuario')
        const response=await api.get(`perfil/${user}`)
        this.setState({repos:response.data})

    }
  render() {
    return (
      <div>
          <Perfil repo={this.state.repos}/>
      </div>
    )
  }
}
