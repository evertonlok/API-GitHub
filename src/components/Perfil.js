import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Perfil extends Component {

  render() {
      const {repo}=this.props

    return (
      <div className="container">
        <img src={repo.avatar_url} />
        <h1>{repo.login}</h1>
        <button type="button"><Link to="/repos">Repositórios</Link></button>
      </div>
    )
  }
}
