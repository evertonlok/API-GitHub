import React, { Component } from 'react'
import './inicio.css'
export default class Inicio extends Component {
  
  state={
      user:''
  }
  handleInputChange=(e)=>
  {
      this.setState({user:e.target.value})
  }
   handleSubmit=async(e)=>
  {
      e.preventDefault()
      const {user}=this.state
      localStorage.setItem('usuario',user)
      this.props.history.push('/perfil')
  }
  render() {

    return (
        <div className="input">
            <form onSubmit={this.handleSubmit} >
                 <h1>Usuário GitHub</h1>
                <input type="text"  placeholder="Usuario GitHub" value={this.state.user} onChange={this.handleInputChange}/>
                <button type="submit" className="button">Pesquisar</button>
            </form>
        </div>
      
    )
  }
}
