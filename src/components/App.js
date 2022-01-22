import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';
import UserView from './UserView';

class App extends Component {
state ={
  login: 'admin',
  password: '123qwe',
  loginUser:'',
  passwordUser:'',
  // isCorrectLogin powinien być false (czas developowania true)
  isCorrectLogin: true,
  announcementItems:[
    {id:1, title:'Test1', description: 'testowy testowy testowy', location: 'Warszaw'},
    {id:2, title:'Test2', description: 'testowy testowy testowy', location: 'Katowice'},
    {id:3, title:'Test3', description: 'testowy testowy testowy', location: 'Szczecin'},
    {id:4, title:'Test4', description: 'testowy testowy testowy', location: 'KrakOw'}
  ]

}
// Funkcja sprawdzająca inputy
handleLoginInput = (e)=>{

  console.log(e.target.value)
  if(e.target.name === 'login'){

    this.setState({
      loginUser: e.target.value,
    })
  } 
  if(e.target.name === 'password'){

    this.setState({
      passwordUser: e.target.value,
    })
  }
}
// Funkcja ustawia isCorrectLogin na true jeśli password i login jest poprawny
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
        {/* NA CZAS DEVELOPOWANIA USTAWIAM isCorrectLogin na true */}
        {this.state.isCorrectLogin ? <UserView announcementItems={this.state.announcementItems}/> : <LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/>  }
        {/* <LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/> */}
        {/* {this.state.isCorrectLogin ? <UserView/> : null} */}
        
      </div>
    );
  }
}

export default App;
