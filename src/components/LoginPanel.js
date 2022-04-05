import React from 'react';
import { Link } from 'react-router-dom';
import ModalNotification from './ModalNotification';
const LoginPanel = (props) => {
    return ( 
        <>
        {/* <div className='ball'></div> */}
        <div className='ball--one'></div>
        <div className='ball--two'></div>
        <div className='ball--three'></div>
        {/* <div className='container'>
          <div className='header'>
            <div className='header-block'>AN</div>
          </div>
        </div> */}
        {props.isDisplayNotification ?
        <ModalNotification modalNotifi={props.modalNotifi} />
          :
          null
        }
        
        {props.isRegister ?
          <div className='register-panel'>
            <div className='col-4 register-panel__image'>
              <div className='register-panel__large-text'>
                  AN
              </div>
              <div className='register-panel__normal-text'>
                Rejestracja Announcement App
                
                </div>
              <div className='register-panel__ball-set col-12'>
                
                <button className={props.rActiveOne ? 'register-panel__ball--active': 'register-panel__ball'} name="one" onClick={props.handleSetActiveButtonOnRegister}>1</button>
                <button className={props.rActiveTwo ? 'register-panel__ball--active': 'register-panel__ball'} name="two" onClick={props.handleSetActiveButtonOnRegister}>2</button>
                <button className={props.rActiveThree ? 'register-panel__ball--active': 'register-panel__ball'} name="three" onClick={props.handleSetActiveButtonOnRegister}>3</button>
              </div>
              <div className='register-panel__prompt'>
                {props.rActiveOne ?  'Pamiętaj, aby uzywać silnych haseł' : null}
                {props.rActiveTwo ? 'Jeśli posiadasz już konto w aplikacji, przejdź do logowania' : null}
                {props.rActiveThree ? 'Nazwa użytkownika nie może zawierać dużych liter' : null}
              </div>
            </div>
            <div className='col-8 register-panel__right'>
              <div className='register-panel__header'>
                <div className='register-panel__text col-11'>Utwórz konto</div>
                <div className='register-panel__back col-1' onClick={props.handleBackFromRegister}> WRÓĆ </div>
              </div>
              <div className='register-panel__text--info'>Uzupełnij dane w formularzu, aby utworzyć konto i móc korzystać z aplikacji Announcement</div>
              <div className='register-panel__input-contents'>
                <div className='register-panel__items col-12'>
                  <div className='register-column register-column__info'>
                    <input className='register-panel__input ' name="rName" type="text" maxLength={30} placeholder='Imię' onChange={props.handleCheckRegisterInput} />
                    {props.rName === '' ? <label htmlFor="">Pole wymagane | max 20 znaków</label> : null }
                    
                  </div>
                  <div className='register-column register-column__info'>
                    <input className='register-panel__input ' name="rSurname" type="text" maxLength={30} placeholder='Nazwisko' onChange={props.handleCheckRegisterInput} />
                    {props.rSurname === '' ? <label htmlFor="">Pole wymagane | max 20 znaków</label> : null }
                    
                  </div>
                </div>
                <div className='register-panel__items col-12'>
                  <div className='register-column register-column__info'>
                    <input className='register-panel__input ' pattern="[0-9]" name="rPhoneNumber" type="text" maxLength={9} placeholder='Numer telefonu' onChange={props.handleCheckRegisterInput} />
                    {props.rPhoneNumber === '' ? <label htmlFor="">Pole wymagane</label> : null }
                    {props.rPhoneNumber.length < 9 && props.rPhoneNumber !== '' ? 'Numer musi telefonu musi zawierać 9 cyfr' : null}
                    
                  </div>
                  {/* <input className='register-panel__input' name="rAccountType" type="text" placeholder='Rodzaj konta' onChange={props.handleCheckRegisterInput} /> */}
                  <div className='register-panel__toogle' onClick={props.handleChangeTypeUser}>{props.rUserType === 2 ? 'Regular' : 'Buissnes'}</div>
                </div>
                <div className='register-panel__items'>
                  <div className='register-column register-column__info'>
                    <input className='register-panel__input ' placeholder='Nazwa użytkownika' name="rLogin" type="text" maxLength={20} defaultValue={props.rLogin.toLowerCase()} onChange={props.handleCheckRegisterInput} />
                    {props.rLogin === '' ? <label htmlFor="">Pole wymagane | max 20 znaków</label> : null }
                    {props.rLogin !== props.rLowerLogin ? <label>Nazwa użytkownika musi być z małych liter</label> : null}
                    {props.rLogin !== props.rLowerLogin ? props.rLogin === '' : null}
                    {props.rLogin.indexOf(' ') >= 0 ? <label>Nazwa użytkownika nie może zawierać spacji</label> : null}
                    {props.rLogin.indexOf(' ') >= 0 ? '': null}
                  </div>
                  <div className='register-column register-column__info'>
                    <input className='register-panel__input ' name="rPassword" type="text" maxLength={20} placeholder='Hasło' onChange={props.handleCheckRegisterInput} />
                    {props.rPassword === '' ? <label htmlFor="">Pole wymagane | max 20 znaków</label> : null }
                    
                  </div>
                </div>
              </div>
              {/* <div>Jeśli posiadasz konto użytkownika na portalu Announcement APP, przejdź 
                do ekranu logowania</div> */}
              <button className='register-panel__register-button' onClick={props.handleCreateNewAccount}>Zarejestruj</button>
            </div>
          </div>
          :
          null
        }

        <div className='container  row-box col-12'>
          <div className='welcome-text col-6'>
            <div className='welcome-text__bold'>Witaj! w aplikacji do wspomagania sprzedaży reklam zewnętrznych 
            {/* <div className='welcome-text__bold--colorful'>
              Announcement App!
              </div> */}
            </div>
            <div className='welcome-text__semi-bold'>Jeśli posiadasz przestrzeń, którą możesz zagospodarować pod reklamę, zrób to z nami!</div>
            <div className='welcome-text__semi-bold'>Jeśli chciałbyś zareklamować swój produkt i zainteresować tym potencjalnych klientów, to miejsce dla Ciebie!</div>
            <div className='welcome-text__register'>Nie posiadasz konta? Zarejestruj się</div>
            <button className='welcome-register-button' onClick={props.handleChangeRegister}>Zarejestruj się</button>
          </div>
        {props.allowEntry ?
          // TO DO przycisk wyloguj
          null
          :
          <div className='col-6 panel'>
          <div className='login-panel'>
          <div className='col-12 login-panel__form'>
            <div className='col-12 login-panel__form-item'>
              <div className='login-panel__text'>
                Wpisz swój login
              </div>
              <input className='login-panel__input' type="text" placeholder='login' name='login' maxLength={20} onChange={props.handleLoginInput} />
              {/* {props.loginUser.length === 0 ? 'login nie może być pusty' : null } */}
            </div>
            <div className='col-12 login-panel__form-item'>
              <div className='login-panel__text'>
                Uzupełnij hasło
              </div>
              <input className='login-panel__input' type="password" placeholder='hasło' name='password' maxLength={20} onChange={props.handleLoginInput} />
            </div>
          </div>

            <div className='login-panel__accept'>
              {props.isCorrectLoginUser && props.isCorrectPasswordUser ?
                          <Link to={props.idUser === 1 ? "/adminView" : "/userView"} className='login-button__link'>
              
                          <button onClick={props.checkLogIn}  className='login-button'>
                            Log In
                          </button>
                        </Link>
              :
              
              
              <button className='login-button'>
                Log In
              </button>

              }
            </div>
        
        </div>   
        </div>
        }
        {/* <div className='col-6 panel'>
          <div className='login-panel'>
          <div className='col-12 login-panel__form'>
            <div className='col-12 login-panel__form-item'>
              <div className='login-panel__text'>
                Enter your login
              </div>
              <input className='login-panel__input' type="text" placeholder='login' name='login' onChange={props.handleLoginInput} />
            </div>
            <div className='col-12 login-panel__form-item'>
              <div className='login-panel__text'>
                Enter your password
              </div>
              <input className='login-panel__input' type="password" placeholder='password' name='password' onChange={props.handleLoginInput} />
            </div>
          </div>

            <div className='login-panel__accept'>
              {props.isCorrectLoginUser && props.isCorrectPasswordUser ?
                          <Link to={props.idUser === 1 ? "/adminView" : "/userView"} className='login-button__link'>
              
                          <button onClick={props.checkLogIn}  className='login-button'>
                            Log In
                          </button>
                        </Link>
              :
              
              
              <button className='login-button'>
                Log In
              </button>

              }


            </div>
        </div>   
        </div> */}
        </div>


        </>
     );
}
 
export default LoginPanel;