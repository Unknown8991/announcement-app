import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';

class App extends Component {
state ={
  login: 'admin',
  password: '123qwe',
  loginUser:'',
  passwordUser:'',
  isCorrectLogin: false,
}
handleLoginInput = (e)=>{
  console.log('test')
  console.log(e.target.value)
  if(e.target.name === 'login'){
    console.log('login jest')
    this.setState({
      loginUser: e.target.value,
    })
  } 
  if(e.target.name === 'password'){
    console.log('password jest')
    this.setState({
      passwordUser: e.target.value,
    })
  }
}
checkLogIn = () =>{
  if(this.state.login === this.state.loginUser && this.state.password === this.state.passwordUser){
    this.setState({
      isCorrectLogin: true,
    })
  }
}
  render() {
    return (
      <div className="App">
        <LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/>
      </div>
    );
  }
}

export default App;
