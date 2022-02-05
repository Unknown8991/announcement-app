import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';
import Header from './Header';
import UserView from './UserView';
import UserPanel from './UserPanel';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
// import AdminPanel from './AdminPanel';

class App extends Component {
state = {
  login: 'admin',
  password: '123qwe',
  loginUser:'',
  passwordUser:'',
  // isCorrectLogin powinien być false (czas developowania true)
  isCorrectLogin: true,
  // isAllowAccess: false,
  announcementItems:[],
  addAnnouncement: false,
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
// Zmiana stanu przycisku dodającego ogłoszenie
handleAddAnnouncement = () =>{
  this.setState({
    addAnnouncement: !this.state.addAnnouncement,
  })
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


  render() {
    return (
        <Router>
          <div className="app">
            
            <Header fullHeader={this.state.isCorrectLogin}/>
            <Routes>
              <Route path="/" exact element={<LoginPanel login={this.state.login} password={this.state.password} handleLoginInput={this.handleLoginInput} checkLogIn={this.checkLogIn}/>} />
              <Route path="userView" element={<UserView announcementItems={this.state.announcementItems} addAnnouncement={this.state.addAnnouncement} handleAddAnnouncement={this.handleAddAnnouncement}/>}/>
              <Route path="profil" element={<UserPanel/>}/>
            </Routes>

          </div>
        </Router>
    );
  }
}

export default App;
