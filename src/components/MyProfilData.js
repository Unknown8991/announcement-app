import React from 'react';
import EditAccountData from './EditAccountData';

const MyProfilData = (props) => {

    return ( 
        <div>
            {props.isEditAccount ? 
                <EditAccountData
                    userData={props.userData}
                    userFirstName={props.userFirstName}
                    userSurname={props.userSurname}
                    userLogin={props.userLogin}
                    userPassword={props.userPassword}
                    userNumberPhone={props.userNumberPhone}
                    isEditAccount={props.isEditAccount}
                    isEditInfo={props.isEditInfo}
                    errorEditPassword={props.errorEditPassword}
                    handleRunEditAccountData={props.handleRunEditAccountData}
                    handleCloseEditAccountData={props.handleCloseEditAccountData}
                    handleEditAccountData={props.handleEditAccountData}
                    handleSendEditAccountData={props.handleSendEditAccountData}
                />
                : 
                null
            }
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Imię</label>
                    <input disabled className='my-profile-data__input' type="text" placeholder={props.userFirstName} max="10"/>
                    
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Nazwisko</label>
                    <input disabled className='my-profile-data__input' type="text" placeholder={props.userSurname}/>
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Login</label>
                    <input disabled className='my-profile-data__input' type="text" placeholder={props.userLogin} />
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Hasło</label>
                    {props.isShowPassword ? 
                        
                        <input disabled className='my-profile-data__input' type="text" placeholder={props.userPassword} />
                        :
                        <input disabled className='my-profile-data__input' type="password" defaultValue={props.userPassword} />
                        
                    
                    }
                    <button className='show-password-button' onClick={props.handleShowPassword}>
                        {props.isShowPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                    </button>
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Numer telefonu</label>
                    <input disabled className='my-profile-data__input' type="text" placeholder={props.userNumberPhone} />
                    <div className='my-profile-data__edit'>
                        <button className={props.isEditAccount ? 'my-profile-data__edit--button-active' : 'my-profile-data__edit--button-sleep'} onClick={props.handleRunEditAccountData}>
                            Edytuj
                        </button>
                    </div>
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Twoja rola użytkownika</label>
                    <div className='my-profile-data__description'>
                        <div className='col-3 my-profile-data__description--title'>
                            Regular
                        </div>
                        <div className=' my-profile-data__description--text'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, veniam.
                        </div>
                    </div>
                </div>


            </div>

        </div>
     );
}
 
export default MyProfilData;