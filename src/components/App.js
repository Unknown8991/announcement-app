import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';
import UserView from './UserView';

class App extends Component {
state = {
  login: 'admin',
  password: '123qwe',
  loginUser:'',
  passwordUser:'',
  // isCorrectLogin powinien być false (czas developowania true)
  isCorrectLogin: true,
  announcementItems:[]

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
componentDidMount () {
  const API = 'http://localhost:8000/announcements/';
  fetch(API,{
    method: 'GET',
    mode: 'cors'
  }, true)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    this.setState({
      announcementItems: data
    })
  })
  console.log(this.state.announcementItems)
  
  
  
  

}
test =() =>{
  // console.log(this.state.announcementItems)
}
  render() {
    return (
      <div className="App">
        {/* NA CZAS DEVELOPOWANIA USTAWIAM isCorrectLogin na true */}
  
        {this.state.isCorrectLogin ? <UserView announcementItems={this.state.announcementItems}/> : <LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/>  }
        {/* <LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/> */}
        {/* {this.state.isCorrectLogin ? <UserView/> : null} */}
        {/* dla testów button */}
        {/* <button onClick={this.test}>dodaj</button> */}
      </div>
    );
  }
}

export default App;
