import React, { Component } from 'react'
import styled from "styled-components";

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
  const Wrapper = styled.div
  `
     max-width: 600px;
     margin: 0 auto;
  `;
    return (
      <Wrapper>
        <div className="input">
            <form onSubmit={this.handleSubmit} >
                <input type="text" onChange={this.handleInputChange}/>
                <button type="submit">Pesquisar</button>
            </form>
        </div>
      </Wrapper>
    )
  }
}
