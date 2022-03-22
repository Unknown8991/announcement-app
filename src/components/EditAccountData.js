import React from 'react';

const EditAccountData = (props) => {
    return ( 
        <div className='edit-account-data'>
            <div>
            <div className='edit-account-data__header'>
                <label className='col-11' htmlFor="">Edycja konta użytkownika</label>
                <div className=' edit-account-data__close' onClick={props.handleCloseEditAccountData}>X</div>        
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Imię</label>

                    <input name="name" className='my-profile-data__input' type="text" minLength={3} maxLength='10'  onChange={props.handleEditAccountData} defaultValue={props.userFirstName} />
                    {props.userFirstName.length >= 10 ? 'Maksymalna ilość znaków to 10' : null}
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Nazwisko</label>
                    <input name="surname" className='my-profile-data__input' type="text" maxLength={10} minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userSurname}/>
                    {props.userSurname.length >= 10 ? 'Maksymalna ilość znaków to 10' : null}
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Hasło</label>
                    <input name="password" className='my-profile-data__input' type="text" maxLength='10' minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userPassword} />
                    {props.userPassword.length >= 10 ? 'Maksymalna ilość znaków to 10' : null}
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Potwierdź hasło</label>
                    <input name="passwordConfirm" className='my-profile-data__input' type="password" maxLength='10' minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userPassword} />
                    {props.userPassword.length >= 10 ? 'Maksymalna ilość znaków to 10' : null}
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Numer telefonu</label>
                    <input name="phoneNumber" className='my-profile-data__input' type="text" maxLength='10' onChange={props.handleEditAccountData} defaultValue={props.userNumberPhone} />
                    {props.userNumberPhone.length >= 10 ? 'Maksymalna ilość znaków to 9' : null}
                </div>
            </div>
            {props.isEditInfo ? <div>Dane zostały zapisane</div> : null}
            <div>
                <button onClick={props.handleSendEditAccountData} className='my-profile-data__edit--button-active'>Zapisz</button>
            </div>
            </div>
        </div>
     );
}
 
export default EditAccountData;