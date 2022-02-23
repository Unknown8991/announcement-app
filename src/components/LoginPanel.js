import React from 'react';


import { Link } from 'react-router-dom';

const LoginPanel = (props) => {
    return ( 
        <>
        <div className='ball'></div>
        {/* <div className='container'>
          <div className='header'>
            <div className='header-block'>AN</div>
          </div>
        </div> */}


        <div className='container  row-box col-12'>

          <div className='welcome-text col-6'>
            <div className='welcome-text__bold'>Welcome to the <div className='welcome-text__bold--colorful'>Announcement App!</div></div>
            <div className='welcome-text__semi-bold'>Start exploring by logging into your account</div>
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