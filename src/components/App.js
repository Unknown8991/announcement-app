import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';
import Header from './Header';
import UserView from './UserView';
import UserPanel from './UserPanel';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
  // formularz announcement
  title:'',
  description: '',
  location: '',
  addressId: null,
  lmDat:'',
  endDat:'',
  status:1,
  type:null,
  isFormAnnouncementCorrect: false,
  statementAddAnnouncement: false,
  permissionUser: false,
}
// Funkcja sprawdzająca inputy
handleLoginInput = (e)=>{
 
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
      // tymczasowe
      // permissionUser: true,
    })
  }

}
// Zmiana stanu przycisku dodającego ogłoszenie
handleAddAnnouncement = () =>{
  this.setState({
    addAnnouncement: !this.state.addAnnouncement,
  })
}
// Obsługa formularza dodawania ogłoszeń
handleInputAnnouncement = (e) =>{
  const name = e.target.name;
  
  if(name ==="title"){
    this.setState({
      title: e.target.value,
    })
  }
  if(name === "description"){
    this.setState({
      description: e.target.value,
    })
  }
  // Potrzebny dana dla lokacji 
  // if(name === "location"){
  //   this.setState({
  //     location: e.target.value
  //   })
  // }

}
// Aktywacja przycisku dodawania ogłoszenia
handleUpdateStateAnnouncementForm = ()=>{
  const today = new Date();
  // console.log(today)
  if(this.state.title.length > 0 && this.state.description.length > 0){

  //   console.log(this.state.title.length)
  //  console.log(this.state.description.length)
   this.setState({
     isFormAnnouncementCorrect: true,
   })
  }else{
    this.setState({
      isFormAnnouncementCorrect: false
    })
  }
}
// Wysłanie formularza z ogłoszeniem
handleSendAnnouncement = () =>{
  console.log('działa')
 
  const data={
    "title": this.state.title,
    "description": this.state.description,
    "address_id": null,
    "lm_dat": "2022-02-12T10:02:21.907571Z",
    "end_dat": "2022-03-01T09:46:09.541000Z",
    "state": 1,
    "type": null
  }
  const url = 'http://localhost:8000/announcements/';
  fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response => {
    response.json()
    console.log(response.status)
    if(response.status === 201){
      console.log('okno modalne')
      this.setState({
        statementAddAnnouncement: true,
        addAnnouncement: false
      })
      if(this.state.statementAddAnnouncement){
        setTimeout(()=>{
          this.setState({
            statementAddAnnouncement: false,
          })
        }, 4000)
      }
    }
  })
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

}
// Zamknięcie formularza ogłoszenia
handleCloseForm = () =>{
  this.setState({
    addAnnouncement: false,
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
            
            {/* <Header fullHeader={this.state.isCorrectLogin} permissionUser={this.state.permissionUser}/> */}
            <Routes>
              <Route path="/" exact element={<LoginPanel 
                login={this.state.login} 
                password={this.state.password} 
                permissionUser={this.state.permissionUser}
                handleLoginInput={this.handleLoginInput} 
                checkLogIn={this.checkLogIn}
              />}/>
              <Route path="userView" element={<UserView
              fullHeader={this.state.isCorrectLogin}
                announcementItems={this.state.announcementItems} 
                addAnnouncement={this.state.addAnnouncement} 
                isFormAnnouncementCorrect={this.state.isFormAnnouncementCorrect}
                statementAddAnnouncement={this.state.statementAddAnnouncement}
                handleInputAnnouncement={this.handleInputAnnouncement}
                handleAddAnnouncement={this.handleAddAnnouncement}
                handleSendAnnouncement={this.handleSendAnnouncement}
                handleUpdateStateAnnouncementForm={this.handleUpdateStateAnnouncementForm}
                handleCloseForm={this.handleCloseForm}
               />}/>
              <Route path="profil" element={<UserPanel/>}/>
            </Routes>

          </div>
        </Router>
    );
  }
}

export default App;
