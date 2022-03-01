import React, { Component } from 'react';
import './App.scss';
import LoginPanel from './LoginPanel';
import UserView from './UserView';
import AdminView from './AdminView';
import UserPanel from './UserPanel';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import AdminPanel from './AdminPanel';
import Request from '../utils/Request';

class App extends Component {
state = {
  // rejestracja użytkownika
  isRegister: false,
  rActiveOne: true,
  rActiveTwo: false,
  rActiveThree: false,
  rName: '',
  rSurname:'',
  rPhoneNumber:'',
  rAccountType:2,
  rLogin:'',
  rPassword:'',
  isCorrectRegister: false,
  // logowanie użytkownika
  loginUser:'',
  passwordUser:'',
  idUser:'',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  isCorrectLoginUser: false, 
  isCorrectPasswordUser: false, 
  isActivePassword: false,
  allowEntry: false,
  // isCorrectLogin powinien być false (czas developowania true)
  isCorrectLogin: false,
  // isAllowAccess: false,
  announcementItems:[],
  addAnnouncement: false,
  // wyszukiwarka
  activeSearch: false,
  searchText: '',
  // formularz announcement
  title:'',
  description: '',
  location: '',
  city: '',
  street: '',
  bldNumber: '',
  fleet: '',
  code: '',
  addressId: null,
  lmDat:'',
  endDat:'',
  status:1,
  type:null,
  isFormAnnouncementCorrect: false,
  statementAddAnnouncement: false,
  permissionUser: false,
  // panel profilu
  // dane w ustawieniach
  userData:[],
  myAnnouncements:[],
  myFavourites:[],
  isActiveOptionOne: true,
  isActiveOptionTwo: false,
  isActiveOptionThree: false,
  isDeleteAnnouncement: false,
}
// Funkcja zmieniająca isRegister na true
handleChangeRegister = ()=>{
  console.log('zmiana na true')
  this.setState({
    isRegister: true,
  })
}
handleBackFromRegister = ()=>{
  console.log('test')
  this.setState({
    isRegister: false,
  })
}
// Funckja uzupełnia inputy na rejestracji
handleCheckRegisterInput = (e) =>{

  let value = e.target.value
  if(e.target.name === "rName"){
    this.setState({
      rName: value
    })
    this.checkRegisterForm()
  }
  if(e.target.name === "rSurname"){
    this.setState({
      rSurname: value
    })
    this.checkRegisterForm()
  }
  if(e.target.name === "rPhoneNumber"){
    this.setState({
      rPhoneNumber: value
    })
    this.checkRegisterForm()
  }
  if(e.target.name === "rLogin"){
    this.setState({
      rLogin: value
    })
    this.checkRegisterForm()
  }
  if(e.target.name === "rPassword"){
    this.setState({
      rPassword: value
    })
    this.checkRegisterForm()
  }
}
// Funkcja sprawdzająca czy inputy są poprawnie uzupełnione
checkRegisterForm = () =>{
  if(this.state.rName !== '' && this.state.rSurname !== '' && this.state.rPhoneNumber !== '' && this.state.rLogin !== '' && this.state.rPassword !== '' ){
    console.log('jestem uzupełniony')
    this.setState({
      isCorrectRegister: true
    })
  }else{
    console.log('nie jestem')
    this.setState({
      isCorrectRegister : false
    })
  }
}
// Funkcja wysyłająca formularz nowego użytkownika
handleCreateNewAccount = () =>{
  // console.log('Jest ok')
  const data = {
    // "user_id": 4,
    "user_name": "amaria12345",
    "password": "aqq123",
    "first_name": "Andrzej",
    "last_name": "Maria",
    "tel_number": "696552154",
    "is_del": "False",
    "adddate": "2022-01-02T09:46:16.421Z",
    "lm_date": "2022-01-03T10:46:16.421Z",
    "user_type_id": 2
}
if(this.state.isCorrectRegister){
  const url = Request.url + 'users/'
  fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response =>{
    response.json()
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
console.log(data)
}
// Funkcja zmieniający aktywny przycisk na rejestracji
handleSetActiveButtonOnRegister = (e) =>{
  let nameButton = e.target.name
  console.log(nameButton)
  if(nameButton === "one"){
    this.setState({
      rActiveOne: true,
      rActiveTwo: false,
      rActiveThree: false,
    })
  }
  if(nameButton === "two"){
    this.setState({
      rActiveOne: false,
      rActiveTwo: true,
      rActiveThree: false,
    })
  }
  if(nameButton === "three"){
    this.setState({
      rActiveOne: false,
      rActiveTwo: false,
      rActiveThree: true,
    })
  }
}
// Funkcja sprawdzająca inputy
handleLoginInput = (e)=>{
  const arrayUsers = [...this.state.userData]
  const testowanie = window.localStorage.setItem('test', JSON.stringify(arrayUsers))
  console.log(testowanie)
  if(e.target.name === 'login'){

    const found = arrayUsers.filter(element => element.user_name === e.target.value)
    // console.log(found)
    if(found.length === 0){
      // console.log('pusta tablica')
      this.setState({
        loginUser: '',
        passwordUser: '',
        idUser:'',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        isCorrectLogin: false,
      })
    }else{
      // console.log('Nie jest pusta')
      this.setState({
        loginUser: found[0].user_name,
        passwordUser: found[0].password,
        idUser: found[0].user_id,
        firstName: found[0].first_name,
        lastName: found[0].last_name,
        phoneNumber: found[0].tel_number,
        isCorrectLoginUser: true,
      })
      
    }
    return found
  }
  if(e.target.name === "password"){
    if(this.state.loginUser !== "" && this.state.passwordUser){
      if(this.state.passwordUser === e.target.value){
        console.log('poprawne')
        this.setState({
          isCorrectPasswordUser: true
        })
      }else{
        this.setState({
          isCorrectPasswordUser: false
        })
      }
    }
  }

  
  // if(e.target.name === 'login'){
  //   const foundUser = arrayUsers.map(element => {
  //     if(e.target.value  === element.user_name){
        
  //       this.setState({
  //         loginUser: element.user_name,
  //         idUser: element.user_id,
  //         isCorrectLoginUser: true,
  //       })
  //     } 
      
  //     return foundUser
  //   })
    
  // } 
  // if(e.target.name === 'password'){
  //   const foundPassword = arrayUsers.filter(element => {
  //     if(element.password === e.target.value){
  //       this.setState({
  //         passwordUser: e.target.value,
  //         isCorrectPasswordUser: true,
  //       })
  //     }

  //     return foundPassword
  //   })
  // }

}
// Funkcja ustawia allowEntry na true jeśli password i login jest poprawny
checkLogIn = () =>{
  if(this.state.isCorrectLoginUser === true && this.state.isCorrectPasswordUser === true){
    // console.log('mozna wejsc')
    this.setState({
      allowEntry: true,
    })
  }
  
    const API = Request.url + 'announcements/';
    fetch(API,{
      method: 'GET',
      mode: 'cors'
    }, true)
    .then(response => response.json())
    .then(data =>{
      // console.log(data)
      this.setState({
        announcementItems: data
      })
      console.log(data)
    })
    // console.log(this.state.announcementItems)
    
    // Pobranie info o użytkowniku
    

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
  if(name === "city"){
  
    this.setState({
      city: e.target.value
    })
  }
  if(name === "street"){
    this.setState({
      street: e.target.value
    })
  }
  if(name === "bldNumber"){
    this.setState({
      bldNumber: e.target.value
    })
  }
  if(name === "fleet"){
    this.setState({
      fleet: e.target.value
    })
  }
  if(name === "code"){
    this.setState({
      code: e.target.value
    })
  }

}
// Aktywacja przycisku dodawania ogłoszenia
handleUpdateStateAnnouncementForm = ()=>{
  // const today = new Date();
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
  const data={
 
          "user_id": this.state.idUser,
          "title": this.state.title,
          "description": this.state.description,
          "adddate": "2022-01-01T09:46:09.541Z",
          "is_del": "False",
          "lm_dat": "2022-01-01T09:46:09.541Z",
          "end_dat": "2022-03-01T09:46:09.541Z",
          "state": "1",
          "address": {
               "city": this.state.city,
               "street": this.state.street,
               "bld_number": this.state.bldNumber,
               "fleet": this.state.fleet,
               "code": this.state.code
          }
  }
  console.log(data)
 
  const url = Request.url + 'announcements/';
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
      //  Poprawka! Teraz mamy pewność że ogłoszenia zostaną pobrane w momencie wysłania POST i gdy odpowiedź jego jest suckes
      const API = Request.url + 'announcements/';
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

// const API = Request.url + 'announcements/';
// fetch(API,{
//   method: 'GET',
//   mode: 'cors'
// }, true)
// .then(response => response.json())
// .then(data =>{
//   console.log(data)
//   this.setState({
//     announcementItems: data
//   })

//   // console.log(data)

// })

}
// Zamknięcie formularza ogłoszenia
handleCloseForm = () =>{
  this.setState({
    addAnnouncement: false,
  })
}
// Uruchomienie wyszukiwarki
handleActiveSearch =()=>{
  console.log("działa")
  this.setState({
    activeSearch: !this.state.activeSearch,
  })
}
// Działanie wyszukiwarki
handleChangeForm = (e) =>{
  let text = e.target.value;
  console.log('ok')
  this.setState({
    searchText: text,
  })
}
// Zmiana aktywnego przycisku w profilu użytkownika
handleChangeActiveProfilOption = (e)=>{
 
  let nameButton = e.target.name
  if(nameButton === "one"){
    

    console.log(nameButton)
    this.setState({
      isActiveOptionOne: true,
      isActiveOptionTwo: false,
      isActiveOptionThree: false,
    })
  }
  if(nameButton === "two"){
    const API = Request.url + `announcements/user/${this.state.idUser}`;
    console.log(API)
    fetch(API,{
      method: 'GET',
      mode: 'cors'
    }, true)
    .then(response => response.json())
    .then(data =>{
      this.setState({
        myAnnouncements: data
      })
      // console.log(data)
    })
    console.log(nameButton)
    this.setState({
      isActiveOptionOne: false,
      isActiveOptionTwo: true,
      isActiveOptionThree: false,
    })

  }
  if(nameButton === "three"){
    const API = Request.url + `favourites/user/${this.state.idUser}`;
    console.log(API)
    fetch(API,{
      method: 'GET',
      mode: 'cors'
    }, true)
    .then(response => response.json())
    .then(data =>{
      this.setState({
        myFavourites: data
      })
      // console.log(data)
    })

    console.log(nameButton)
    this.setState({
      isActiveOptionOne: false,
      isActiveOptionTwo: false,
      isActiveOptionThree: true,
    })
  }
}
// Dodawanie do ulubionych
handleAddToFavourites = (id) =>{
  console.log('dodaj')
  const arr = [...this.state.announcementItems]

  const arrayFavourites = arr.map(element =>{
    if(element.announcement_id === id){

      console.log(element.favourite_by)
      const data = 
        {
          "user": this.state.idUser,
          "announcement": element.announcement_id,
        }
        
      const url = Request.url + 'favourites/';
      fetch(url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      })
      .then(response =>{
        response.json()
        console.log(response.status)
      })
      .catch((error)=>{
        console.log('Error', error)
      })
    }
  })
}
handleDeleteAnnouncements = (id) =>{
  const arr = [...this.state.myAnnouncements]
 
  const arrayMyAnnouncements = arr.map(element =>{
    if(element.announcement_id === id){
      const API = Request.url + `announcements/${element.announcement_id}`;
      fetch(API,{
        method: 'DELETE',
        mode: 'cors'
      }, true).then(response =>{
        const API = Request.url + `announcements/user/${this.state.idUser}`;
          console.log(API)
          fetch(API,{
            method: 'GET',
            mode: 'cors'
          }, true)
          .then(response => response.json())
          .then(data =>{
            this.setState({
              myAnnouncements: data
            })
            console.log(data)
          })
        })
    }
  }
  )
  // const API = Request.url + `announcements/user/${this.state.idUser}`;
  // console.log(API)
  // fetch(API,{
  //   method: 'GET',
  //   mode: 'cors'
  // }, true)
  // .then(response => response.json())
  // .then(data =>{
  //   this.setState({
  //     myAnnouncements: data
  //   })
  //   console.log(data)
  // })
}
handleGetUserData = ()=>{
  const API = Request.url + 'users/';
  
  fetch(API,{
    method: 'GET',
    mode: 'cors'
  }, true)
  .then(response => response.json())
  .then(data =>{
    // console.log(data)
    this.setState({
      userData: data,
    })
    this.setState({
      // userFirstName: this.state.userData[1].first_name,
      // userSurname:this.state.userData[1].last_name,
      // userLogin: this.state.userData[1].user_name,
      // userPassword: this.state.userData[1].password,
      // userNumberPhone: this.state.userData[1].tel_number,
    })
    console.log(this.state.userData)
    const test = this.state.userData.filter(element => element.first_name === "Czarek")
    console.log(test)
  })

}

// Do poprawki jeszcze
componentDidMount () {
  this.handleGetUserData();
}

  render() {
    return (
        <Router>
          <div className="app">
            
            {/* <Header fullHeader={this.state.isCorrectLogin} permissionUser={this.state.permissionUser}/> */}
            <Routes>

              <Route path="/" exact element={
                <LoginPanel
                  isRegister={this.state.isRegister}
                  rActiveOne={this.state.rActiveOne}
                  rActiveTwo={this.state.rActiveTwo}
                  rActiveThree={this.state.rActiveThree}
                  login={this.state.login} 
                  password={this.state.password} 
                  permissionUser={this.state.permissionUser}
                  idUser={this.state.idUser}
                  allowEntry={this.state.allowEntry}
                  isCorrectLoginUser={this.state.isCorrectLoginUser}
                  isCorrectPasswordUser={this.state.isCorrectPasswordUser}
                  handleCreateNewAccount={this.handleCreateNewAccount}
                  handleCheckRegisterInput={this.handleCheckRegisterInput}
                  handleBackFromRegister={this.handleBackFromRegister}
                  handleSetActiveButtonOnRegister={this.handleSetActiveButtonOnRegister}
                  handleChangeRegister={this.handleChangeRegister}
                  handleLoginInput={this.handleLoginInput} 
                  checkLogIn={this.checkLogIn}
                  getUserData={()=>this.handleGetUserData()}
                />
              }
              />
    
              {this.state.idUser ===1 ?
              <Route path='adminView' element={
                  <AdminView/>
              }/>
              :
              <Route path="userView" element={ 
                  <UserView
                    fullHeader={this.state.isCorrectLogin}
                    announcementItems={this.state.announcementItems} 
                    activeSearch={this.state.activeSearch}
                    searchText = {this.state.searchText}
                    addAnnouncement={this.state.addAnnouncement} 
                    isFormAnnouncementCorrect={this.state.isFormAnnouncementCorrect}
                    statementAddAnnouncement={this.state.statementAddAnnouncement}
                    handleActiveSearch={this.handleActiveSearch}
                    handleChangeForm={this.handleChangeForm}
                    handleInputAnnouncement={this.handleInputAnnouncement}
                    handleAddAnnouncement={this.handleAddAnnouncement}
                    handleAddToFavourites={this.handleAddToFavourites}
                    handleSendAnnouncement={this.handleSendAnnouncement}
                    handleUpdateStateAnnouncementForm={this.handleUpdateStateAnnouncementForm}
                    handleCloseForm={this.handleCloseForm}
                  /> 
                }
              />
              }
            

              {/* <Route path="userView" element={ 
              <UserView
                fullHeader={this.state.isCorrectLogin}
                announcementItems={this.state.announcementItems} 
                activeSearch={this.state.activeSearch}
                searchText = {this.state.searchText}
                addAnnouncement={this.state.addAnnouncement} 
                isFormAnnouncementCorrect={this.state.isFormAnnouncementCorrect}
                statementAddAnnouncement={this.state.statementAddAnnouncement}
                handleActiveSearch={this.handleActiveSearch}
                handleChangeForm={this.handleChangeForm}
                handleInputAnnouncement={this.handleInputAnnouncement}
                handleAddAnnouncement={this.handleAddAnnouncement}
                handleSendAnnouncement={this.handleSendAnnouncement}
                handleUpdateStateAnnouncementForm={this.handleUpdateStateAnnouncementForm}
                handleCloseForm={this.handleCloseForm}
                /> 
                }/> */}
              <Route path="profil" element={<UserPanel
                isActiveOptionOne={this.state.isActiveOptionOne}
                isActiveOptionTwo={this.state.isActiveOptionTwo}
                isActiveOptionThree={this.state.isActiveOptionThree}
                userData={this.state.userData}
                myAnnouncements={this.state.myAnnouncements}
                myFavourites={this.state.myFavourites}
                userFirstName={this.state.firstName}
                userSurname={this.state.lastName}
                userLogin={this.state.loginUser}
                userPassword={this.state.passwordUser}
                userNumberPhone={this.state.phoneNumber}
                announcementItems={this.state.announcementItems}
                handleDeleteAnnouncements={this.handleDeleteAnnouncements}
                changeActiveProfilOption={this.handleChangeActiveProfilOption}
              />}
              />
            </Routes>

          </div>
        </Router>
    );
  }
}

export default App;
