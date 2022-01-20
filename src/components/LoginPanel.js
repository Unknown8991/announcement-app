import React from 'react';

const LoginPanel = (props) => {
    return ( 
        <>
        <div className='ball'></div>
        <div className='container'>
          <div className='hp'>
            <div className='logo-block'>AN</div>
          </div>
        </div>
        <div className='container row-box col-12'>
          <div className='welcome-text col-6'>
            <div className='welcome-text__bold'>Welcome to the <div className='welcome-text__bold--colorful'>Announcement App!</div></div>
            <div className='welcome-text__semi-bold'>Start exploring by logging into your account</div>
          </div>

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
              <input className='login-panel__input' type="text" placeholder='password' name='password' onChange={props.handleLoginInput} />
            </div>
          </div>
          <div className='login-panel__accept'>
          <button onClick={props.checkLogIn} className='login-button'>
            Log In
          </button>
          </div>
        </div>   
        </div>
        </div>

        </>
     );
}
 
export default LoginPanel;