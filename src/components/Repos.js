import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Repos.css'
export default class Repos extends Component {
  render() {
    const {repo}=this.props
    const user=localStorage.getItem('usuario')
    return (
      <div className="containerr">
        <h1>{repo.description}</h1>
        <h2>{repo.language}</h2>
        <i className="fa fa-star fa-2x"></i>
        <h2>{repo.stargazers_count}</h2>
        <Link to={`detail/${user}/${repo.name}`}>Detalhes</Link>
      </div>
    )
  }
}
