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
  // komunikat dla powiadomień
  isDisplayNotification: false,
  modalNotifi: '',
  // rejestracja użytkownika
  isRegister: false,
  rActiveOne: true,
  rActiveTwo: false,
  rActiveThree: false,
  rName: '',
  rSurname:'',
  rPhoneNumber:'',
  // rAccountType:2,
  rLogin:'',
  rPassword:'',
  rUserType: 1,
  isCorrectRegister: false,
  // logowanie użytkownika
  loginUser:'',
  passwordUser:'',
  idUser:'',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  userTypeId:'',
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
  isFilterActive: false,
  activeFilter: '',
  allLocalizationFilter: false,
  isUndefined: false,
  // pokaż szczegóły
  isShowDetails: false,
  dAnnouncementId:null,
  dTitleAnnnouncement:'',
  dDescriptionAnnnouncement:'',
  dEndDat:'',
  dLocation: '',
  dphoneNumber: '',
  // dTitleAnnnouncement:'',
  // dTitleAnnnouncement:'',
  // Obserwowane widok z userView
  isWatched: false,
  watched:[],
  // formularz announcement
  title:'',
  description: '',
  location: '',
  city: '',
  street: '',
  bldNumber: '',
  fleet: '',
  code: '',
  photo: '',
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
  showModalDelete: false,
  isConfirmDelete: false,
  isDeleteAnnouncement: false,
  exitConfirmDelete: false,
  idDelete: '',
  isEditAccount: false,
  isShowPassword: false,
  // edycja konta uzytkownika
  isEditInfo: false,
  eUserName:'',
  eUserSurname:'',
  eUserPassword:'',
  eUserPasswordConfirm:'',
  ePhoneNumber: '',
  // edycja ogłoszenia
  isEditAnnouncement: false,
  eAnnouncementId: '',
  eUserId: '',
  eTitleAnnouncement: '',
  eDescriptionAnnouncement: '',
  eCityAnnouncement: '',
  eStreetAnnouncement: '',
  eFleetAnnouncement: '',
  eBldNumberAnnouncement: '',
  eCodeAnnouncement: '',
}
// Funkcja zmieniająca isRegister na true
handleChangeRegister = ()=>{
  // console.log('zmiana na true')
  this.setState({
    isRegister: true,
  })
}
handleBackFromRegister = ()=>{
  // console.log('test')
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
// Funkcja obsługuję zmianę usera na formularzu rejestracji
handleChangeTypeUser = () =>{
  if(this.state.rUserType === 2){
    this.setState({
      rUserType: 3
    })
  }else{
    this.setState({
      rUserType: 2,
    })
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
//  Funkcja
// Funkcja wysyłająca formularz nowego użytkownika
handleCreateNewAccount = () =>{
  // console.log('Jest ok')
  const data = {
    // "user_id": 4,
    "user_name": this.state.rLogin,
    "password": this.state.rPassword,
    "first_name": this.state.rName,
    "last_name": this.state.rSurname,
    "tel_number": this.state.rPhoneNumber,
    "is_del": "False",
    "adddate": "2022-01-02T09:46:16.421Z",
    "lm_date": "2022-01-03T10:46:16.421Z",
    "user_type_id": this.state.rUserType
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
    console.log(response.status)
    if(response.status === 201){
      this.setState({
        isRegister: false,
        // isDisplayNotification: true,
        
      })
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
      }) 
      setTimeout(()=>{
        if(this.state.isRegister === false){
          this.setState({
            isDisplayNotification: true,
            modalNotifi: 'Twoje konto zostało utworzone!'
          })
        }
        if(this.state.isDisplayNotification){
          setTimeout(()=>{
            this.setState({
              isDisplayNotification: false,
              modalNotifi: ''
            })
          },3000)
        }
      },300)
    }
  })
  .then(data => {
    console.log('Success:');
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
        userTypeId:found[0].user_type_id,
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
      // console.log(data)
      
      const API2 = Request.url + `favourites/user/${this.state.idUser}`;
      fetch(API2,{
        method: 'GET',
        mode: 'cors'
      },true)
      .then(response => response.json())
      .then(data =>{
        // console.log(data)
        const array = data;
        // console.log(array.announcement_id)
        const idWatched = array.map(item => item.announcement_id)
        // console.log(idWatched)
        this.setState({
          watched: idWatched
        })
      })

    })
 
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
  if(name === "photo"){
    this.setState({
      // 
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
  this.setState({
    title: '',
    description: '',
    city: '',
    street: '',
    bldNumber: '',
    fleet: '',
    code: '',
  })
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
  // console.log("działa")
  this.setState({
    activeSearch: !this.state.activeSearch,
  })
}
// Działanie wyszukiwarki
handleChangeForm = (e) =>{
  let text = e.target.value;
  // console.log('ok')
  this.setState({
    searchText: text,
  })
}
// Aktywacja filtrów
handleActiveFilters = () =>{
  this.setState({
    isFilterActive: !this.state.isFilterActive,
    activeFilter: '',
    allLocalizationFilter: false,
  })
  console.log('filtry')
}
// Weryfikacja klikniętego elemetnu w filtrach
handleVeryficationActiveLocalization = (e)=>{
  // console.log(e.target.id)
  if(e.target.id === "1"){

    this.setState({
      activeFilter: 'Katowice',
      allLocalizationFilter: true,
    })
  }
  if(e.target.id === "2"){

    this.setState({
      activeFilter: 'Sosnowiec',
      allLocalizationFilter: true,
    })
  }
  if(e.target.id === "3"){

    this.setState({
      activeFilter: 'Tychy',
      allLocalizationFilter: true,
    })
  }
  if(e.target.id === "4"){

    this.setState({
      activeFilter: '',
      allLocalizationFilter: true,
    })
  }
  if(e.target.id === "5"){

    this.setState({
      activeFilter: '',
      isFilterActive: false,
      allLocalizationFilter: false,
    })
  }
  if(e.target.id === "6"){
    this.setState({
      allLocalizationFilter: false,
    })
  }

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
    // console.log(API)
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
    // console.log(nameButton)
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
  // console.log('dodaj')
  const arr = [...this.state.announcementItems]

  const arrayFavourites = arr.map(element =>{
    if(element.announcement_id === id){
        

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
        // console.log(response.status)
        const API2 = Request.url + `favourites/user/${this.state.idUser}`;
        fetch(API2,{
          method: 'GET',
          mode: 'cors'
        },true)
        .then(response => response.json())
        .then(data =>{
          // console.log(data)
          const array = data;
          // console.log(array.announcement_id)
          const idWatched = array.map(item => item.announcement_id)
          // console.log(idWatched)
          this.setState({
            watched: idWatched
          })
        })
      })
      .catch((error)=>{
        console.log('Error', error)
      })
    }
  })
  return arrayFavourites
}
//  Usun - Potwierdzenie usunięcia
handleConfirmDeleteAnnouncement = () =>{
  // console.log('zmiana')
  this.setState({
    isConfirmDelete: true
  })

    const API = Request.url + `announcements/${this.state.idDelete}`;
    fetch(API,{
      method: 'DELETE',
      mode: 'cors'
    }, true).then(response =>{
      const API = Request.url + `announcements/user/${this.state.idUser}`;
        // console.log(API)
        fetch(API,{
          method: 'GET',
          mode: 'cors'
        }, true)
        .then(response => response.json())
        .then(data =>{
          this.setState({
            myAnnouncements: data,
            showModalDelete: false,
          })
          // Dodanie odświeżenia listy announcement po usunięciu mojego ogłoszenia
          const API2 = Request.url + 'announcements/';
          fetch(API2,{
            method: 'GET',
            mode: 'cors'
          }, true)
          .then(response => response.json())
          .then(data =>{

            this.setState({
              announcementItems: data
            })
            // console.log(data)
          })
        })
      })



}
// Zamknięcie modala do usuwania
handleCloseDeleteModal = () =>{
  this.setState({
    showModalDelete: false,
  })
}
//  Złapanie elementu do usunięcia
handleDeleteAnnouncements = (id) =>{
  const arr = [...this.state.myAnnouncements]
 
  const arrayMyAnnouncements = arr.map(element =>{
    // console.log(element.announcement_id)
    if(element.announcement_id === id){
      this.setState({
        showModalDelete: true,
        idDelete: element.announcement_id
      })
      // if(this.state.isConfirmDelete){

      //   const API = Request.url + `announcements/${element.announcement_id}`;
      //   fetch(API,{
      //     method: 'DELETE',
      //     mode: 'cors'
      //   }, true).then(response =>{
      //     const API = Request.url + `announcements/user/${this.state.idUser}`;
      //       console.log(API)
      //       fetch(API,{
      //         method: 'GET',
      //         mode: 'cors'
      //       }, true)
      //       .then(response => response.json())
      //       .then(data =>{
      //         this.setState({
      //           myAnnouncements: data
      //         })
      //         // console.log(data)
      //       })
      //     })
      // }
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
    // console.log(this.state.userData)
    // const test = this.state.userData.filter(element => element.first_name === "Czarek")
    // // console.log(test)
  })

}
// Funkcja umożliwiająca podgląd ogłoszenia
handleShowDetails = (id) =>{
  // console.log(id)
  const arr = [...this.state.announcementItems]
  const array = arr.map(element =>{
    if(element.announcement_id === id){

      // console.log(element.announcement_id)
      // console.log(id)
      this.setState({
        dAnnouncementId: element.announcement_id,
        isShowDetails: true,
      })
      const API = Request.url + `announcements/${element.announcement_id}`
      // console.log(API)
      fetch(API,{
        method: 'GET',
        mode: 'cors'
      }, true)
      .then(response => response.json())
      .then(data =>{
        console.log(data[0].user_id)
        if(data[0].address !==null){
          this.setState({
            dAnnouncementId: data[0].announcement_id,
            dTitleAnnnouncement: data[0].title,
            dDescriptionAnnnouncement: data[0].description,
            dEndDat: data[0].end_dat.substr(0,10),
            dLocation: data[0].address.city,
          })
        }else{
          // W przypadku gdy nie ma podanego adresu
          this.setState({
            dAnnouncementId: data[0].announcement_id,
            dTitleAnnnouncement: data[0].title,
            dDescriptionAnnnouncement: data[0].description,
            dEndDat: data[0].end_dat.substr(0,10),
          })
        }
        if(data[0].user_id !== null){
          const API = Request.url + `users/${data[0].user_id}`
          fetch(API,{
            method: 'GET',
            mode: 'cors'
          }, true)
          .then(response => response.json())
          .then(data =>{
            console.log(data.tel_number)
            this.setState({
              dphoneNumber: data.tel_number,
            })
          })
        }
      })

    }
    
  })

}
// Zamknięcie podglądu
handleCloseDetails = ()=>{
  this.setState({
    isShowDetails: false,
  })
}
// Usunięcie ogłoszenia z obserowanych
handleRemoveFromWatched = (id)=>{
  console.log(id)
  // const arr = [...this.state.announcementItems]
  // const API = Request.url + `favourites/user/${this.state.idUser}`
  // console.log(API)
  // fetch(API,{
  //   method: 'DELETE',
  //   mode: 'cors',
  // }, true)
  // .then(response =>{
  //   const API2 = Request.url + `favourites/user/${this.state.idUser}`;
  //   fetch(API,{
  //     method: 'GET',
  //     mode: 'cors'
  //   }, true)
  //   .then(response => response.json())
  //   .then(data =>{
  //     this.setState({
  //       myFavourites: data
  //     })
  //     // console.log(data)
  //   }) 
  // })
  // .then(response => response.json())
  // .then(data =>console.log(data))
}
// Uruchomienie edycji danych konta uzytkownika
handleRunEditAccountData = ()=>{
  this.setState({
    isEditAccount: !this.state.isEditAccount,
  })
}
// Zamknięcie edycji konta użytkownika
handleCloseEditAccountData = () =>{
  this.setState({
    isEditAccount: false,
  })
  const url2 = Request.url + `users/${this.state.idUser}`
  fetch(url2,{
    method: 'GET',
    mode: 'cors'
  }, true)
  .then(response => response.json())
  .then(data =>{
    console.log(data.user_id)

      this.setState({
        loginUser: data.user_name,
        passwordUser: data.password,
        idUser: data.user_id,
        firstName: data.first_name,
        lastName: data.last_name,
        phoneNumber: data.tel_number,

      })
  })
}
// Pokaż hasło
handleShowPassword = () =>{
  console.log('test')
  this.setState({
    isShowPassword: !this.state.isShowPassword,
  })
}
// Edycja danych na koncie użytkownika
handleEditAccountData = (e) =>{
  console.log(e.target.value)
  if(e.target.name === "name"){
    this.setState({
      // eUserName: e.target.value,
      firstName: e.target.value,
    })
  }
  if(e.target.name === "surname"){
    this.setState({
      // eUserSurname: e.target.value
      lastName: e.target.value,
    })
  }
  if(e.target.name === "password"){
    this.setState({
      passwordUser: e.target.value
    })
  }
  if(e.target.name === "passwordConfirm"){
    this.setState({
      eUserPasswordConfirm: e.target.value
    })
  }
  if(e.target.name === "phoneNumber"){
    this.setState({
      phoneNumber: e.target.value
    })
  }

}
// Wysłanie edycji konta użytkownika  
handleSendEditAccountData = ()=>{
 
        console.log('wysyłam')
      
        const url = Request.url + `users/${this.state.idUser}`
        console.log(url)
  
  
        const data ={
          "user_name": this.state.loginUser,
          "first_name": this.state.firstName,
          "last_name": this.state.lastName,
          "password": this.state.passwordUser,
          "tel_number": this.state.phoneNumber,
          "user_type_id": this.state.userTypeId,
        }
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }).then(response =>{
          return response.json()
        }).then(data =>{
          console.log(data)
          const url2 = Request.url + `users/${this.state.idUser}`
          fetch(url2,{
            method: 'GET',
            mode: 'cors'
          }, true)
          .then(response => response.json())
          .then(data =>{
            // console.log(response.status)
            console.log(data.user_id)
              this.setState({
                loginUser: data.user_name,
                passwordUser: data.password,
                idUser: data.user_id,
                firstName: data.first_name,
                lastName: data.last_name,
                phoneNumber: data.tel_number,
  
              })
          })
          this.setState({
            isEditInfo: true,
          })
          setTimeout(() =>{
           this.setState({
              isEditAccount: false,
              isEditInfo: false,
            })
          }, 1000)

        })

  }
// Złapanie edycji na inpucie
handleChangeEditAnnouncement = (e)=>{
  console.log(e.target.value)
  if(e.target.name === "eTitle"){
    this.setState({
      // eUserName: e.target.value,
      title: e.target.value,
    })
  }
  if(e.target.name === "eDescription"){
    this.setState({
      // eUserSurname: e.target.value
      description: e.target.value,
    })
  }
  if(e.target.name === "eLocation"){
    this.setState({
      city: e.target.value
    })
  }
  if(e.target.name === "eStreet"){
    this.setState({
      street: e.target.value
    })
  }
  if(e.target.name === "eBldNumber"){
    this.setState({
      bldNumber: e.target.value
    })
  }
  if(e.target.name === "eFleet"){
    this.setState({
      fleet: e.target.value
    })
  }
  if(e.target.name === "eCode"){
    this.setState({
      bldNumber: e.target.value
    })
  }
}
// Edycja mojego ogłoszenia
handleEditAnnouncement = (id) =>{
  // handleShowDetails
  console.log(id)
  console.log('dział')
  const arr = [...this.state.myAnnouncements]
  // console.log(arr)
  const array = arr.map(element =>{
    if(element.announcement_id === id){
      this.setState({
        eAnnouncementId: element.announcement_id,
        // isEditAnnouncement: true,
      })
      setTimeout(()=>{
        this.setState({
          isEditAnnouncement: true,
        })
      }, 500)
      const API = Request.url + `announcements/${element.announcement_id}`
      console.log(API)
      fetch(API, {
        method: 'GET',
        mode: 'cors'
      }, true)
      .then(response => response.json())
      .then(data =>{
        console.log(data[0].user_id)
        if(data[0].address !== null){
          this.setState({
            eUserId: data[0].user_id,
            eTitleAnnouncement: data[0].title,
            eDescriptionAnnouncement: data[0].description,
            eCityAnnouncement:data[0].address.city,
            eStreetAnnouncement:data[0].address.street,
            eBldNumberAnnouncement:data[0].address.bld_number,
            eFleetAnnouncement:data[0].address.fleet,
            eCodeAnnouncement:data[0].address.code,

            title: data[0].title,
            description: data[0].description,
            city:data[0].address.city,
            street:data[0].address.street,
            bldNumber:data[0].address.bld_number,
            fleet:data[0].address.fleet,
            code:data[0].address.code,
          })
        }
      })
    }

  })
}
handleSendEditAnnouncement =()=>{
  console.log('wyslij')
  const url = Request.url + `announcements/${this.state.eAnnouncementId}`
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
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then( response =>{
    return response.json()
  }).then(data =>{
    console.log(data)
    const API = Request.url + `announcements/user/${this.state.idUser}`;
    // console.log(API)
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
    this.setState({
      isEditInfo: true,
    })
    setTimeout(() =>{
     this.setState({
        isEditAnnouncement: false,
        isEditInfo: false,
      })
    }, 1000)
  })
}
// Zamknięcie edycji ogłoszenia
handleCloseEditAnnouncement = () =>{
  console.log('zamknij')
  this.setState({
    isEditAnnouncement: false,
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
                  rUserType={this.state.rUserType}
                  isDisplayNotification={this.state.isDisplayNotification}
                  modalNotifi={this.state.modalNotifi}
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
                  handleChangeTypeUser={this.handleChangeTypeUser}
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
                    isShowDetails={this.state.isShowDetails}
                    dAnnouncementId={this.state.dAnnouncementId}
                    dTitleAnnnouncement={this.state.dTitleAnnnouncement}
                    dDescriptionAnnnouncement={this.state.dDescriptionAnnnouncement}
                    dLocation={this.state.dLocation}
                    dEndDat={this.state.dEndDat}
                    dphoneNumber={this.state.dphoneNumber}
                    isWatched={this.state.isWatched}
                    watched={this.state.watched}
                    isFilterActive={this.state.isFilterActive}
                    activeFilter={this.state.activeFilter}
                    allLocalizationFilter={this.state.allLocalizationFilter}
                    isUndefined={this.state.isUndefined}
                    handleActiveSearch={this.handleActiveSearch}
                    handleChangeForm={this.handleChangeForm}
                    handleInputAnnouncement={this.handleInputAnnouncement}
                    handleAddAnnouncement={this.handleAddAnnouncement}
                    handleAddToFavourites={this.handleAddToFavourites}
                    handleSendAnnouncement={this.handleSendAnnouncement}
                    handleUpdateStateAnnouncementForm={this.handleUpdateStateAnnouncementForm}
                    handleCloseForm={this.handleCloseForm}
                    handleShowDetails={this.handleShowDetails}
                    handleCloseDetails={this.handleCloseDetails}
                    handleActiveFilters={this.handleActiveFilters}
                    handleVeryficationActiveLocalization={this.handleVeryficationActiveLocalization}
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
                isConfirmDelete={this.state.isConfirmDelete}
                showModalDelete={this.state.showModalDelete}
                isEditAccount={this.state.isEditAccount}
                isShowPassword={this.state.isShowPassword}
                isEditInfo={this.state.isEditInfo}
                eUserId={this.state.eUserId}
                eTitleAnnouncement={this.state.eTitleAnnouncement}
                eDescriptionAnnouncement={this.state.eDescriptionAnnouncement}
                eCityAnnouncement={this.state.eCityAnnouncement}
                eStreetAnnouncement={this.state.eStreetAnnouncement}
                eFleetAnnouncement={this.state.eFleetAnnouncement}
                eBldNumberAnnouncement={this.state.eBldNumberAnnouncement}
                eCodeAnnouncement={this.state.eCodeAnnouncement}
                phoneNumber={this.state.phoneNumber}
                isEditAnnouncement={this.state.isEditAnnouncement}
                // 
                title={this.state.title}
                description={this.state.description}
                city={this.state.city}
                street={this.state.street}
                bldNumber={this.state.bldNumber}
                fleet={this.state.fleet}
                code={this.state.code}
                
                
                handleDeleteAnnouncements={this.handleDeleteAnnouncements}
                changeActiveProfilOption={this.handleChangeActiveProfilOption}
                handleConfirmDeleteAnnouncement={this.handleConfirmDeleteAnnouncement}
                handleCloseDeleteModal={this.handleCloseDeleteModal}
                handleRemoveFromWatched={this.handleRemoveFromWatched}
                handleRunEditAccountData={this.handleRunEditAccountData}
                handleCloseEditAccountData={this.handleCloseEditAccountData}
                handleEditAccountData={this.handleEditAccountData}
                handleSendEditAccountData={this.handleSendEditAccountData}
                handleShowPassword={this.handleShowPassword}
                handleCloseEditAnnouncement={this.handleCloseEditAnnouncement}
                handleEditAnnouncement={this.handleEditAnnouncement}
                handleChangeEditAnnouncement={this.handleChangeEditAnnouncement}
                handleSendEditAnnouncement={this.handleSendEditAnnouncement}
              />}
              />
            </Routes>

          </div>
        </Router>
    );
  }
}

export default App;
