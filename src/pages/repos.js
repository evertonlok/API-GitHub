import React, { Component } from 'react'
import api from '../services/api'
import Repos from '../components/Repos'
import './repos.css'
export default class repos extends Component {
    state={
        repos:[]
    }
    decrescente=()=>
    {
      const {repos}=this.state
      repos.sort((a,b)=>
      {
          return b.stargazers_count - a.stargazers_count
      }) 
      this.setState({repos:repos})
    }
    crescente=()=>
    {
      const {repos}=this.state
      repos.sort((a,b)=>
      {
          return a.stargazers_count - b.stargazers_count
      }) 
      this.setState({repos:repos})
    }
    
  async componentDidMount()
    {
        const user=localStorage.getItem('usuario')
        const response=await api.get(`repos/${user}`)
        this.setState({repos:response.data})
    }
  render() {
    return (
      <div>
        <button type="button" onClick={this.decrescente}>Decrescente</button>
        <button type="button" onClick={this.crescente}>Crescente</button>
        {this.state.repos.map(repo=>
            <Repos repo={repo}/>    
        )}
      </div>
    )
  }
}
