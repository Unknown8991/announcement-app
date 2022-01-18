import React from 'react';

const LoginPanel = (props) => {
    return ( 
        <>
          <div className='login-text'>
            {/* Welcome to Announcement app! */}
          </div>
          <div className='login-panel'>
            <div className='login-panel__header'>
              Announcement <div className='login-panel__header--thin'>user</div> 
            </div>
          <div className='login-panel__info'>
             <div className='login-panel__info--bold'>Log in </div>  
               to your account
            </div>
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
              <input className='login-panel__input' type="text" placeholder='password' name='password' onChange={props.handleLoginInput} />
            </div>
          </div>
          <div className='login-panel__accept'>
          <button onClick={props.checkLogIn} className='login-panel__button'>
            Log In
          </button>
          </div>
        </div>   
        </>
     );
}
 
export default LoginPanel;