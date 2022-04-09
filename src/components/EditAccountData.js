import React from 'react';

const EditAccountData = (props) => {
    return ( 
        <div className='edit-account-data'>
            <div>
            <div className='edit-account-data__header'>
                <label className='col-11 text-edit' htmlFor="">Edycja konta użytkownika</label>
                <div className=' edit-account-data__close' onClick={props.handleCloseEditAccountData}>X</div>        
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Imię</label>

                    <input name="name" className='my-profile-data__input' type="text" minLength={3} maxLength='20'  onChange={props.handleEditAccountData} defaultValue={props.userFirstName} />
                    {props.userFirstName.length === 20 ? 
                     <label htmlFor="" className='edit-error edit-error__text'>Max liczba znaków: 20</label>
                     : 
                     null
                    }
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Nazwisko</label>
                    <input name="surname" className='my-profile-data__input' type="text" maxLength={20} minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userSurname}/>
                    {props.userSurname.length >= 20 ? 
                     <label htmlFor="" className='edit-error edit-error__text'>Max liczba znaków: 20</label>
                     : 
                     null
                     }
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Hasło</label>
                    <input name="password" className='my-profile-data__input' type="password" maxLength='20' minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userPassword} />
                    {props.userPassword.length >= 20 ? 
                        <label htmlFor="" className='edit-error edit-error__text'>Max liczba znaków: 20</label>
                        : 
                        null
                    }
                </div>
                {/* <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Potwierdź hasło</label>
                    <input name="passwordConfirm" className='my-profile-data__input' type="password" maxLength='20' minLength="3" onChange={props.handleEditAccountData} defaultValue={props.userPassword} />
                    {props.userPassword.length >= 20 ? 
                        <label htmlFor="" className='edit-error edit-error__text'>Max liczba znaków: 20</label>
                     :
                        null
                    }
                </div> */}
            </div>
                {/* {props.errorEditPassword ? <div className='col-12 edit-error edit-error__text'>test</div> : null} */}
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Numer telefonu</label>
                    <input name="phoneNumber" className='my-profile-data__input' type="text" maxLength='9' onChange={props.handleEditAccountData} defaultValue={props.userNumberPhone} />
                    {props.userNumberPhone.length >= 10 ? <label htmlFor="" className='edit-error'>Max 9 znaków</label> : null}
                </div>
            </div>
            {props.isEditInfo ? <div className='saved-info'>Dane zostały zapisane</div> : null}
            <label htmlFor="" className='edit-error edit-error__text'>*Numer telefonu musi zawierać 9 cyfr, w przeciwnym wypadku dla pola Numer telefonu zostanie przypisany obecny numer</label>
            <div>
                <button onClick={props.handleSendEditAccountData} className='my-profile-data__edit--button-active'>Zapisz</button>
            </div>
            
            </div>
        </div>
     );
}
 
export default EditAccountData;