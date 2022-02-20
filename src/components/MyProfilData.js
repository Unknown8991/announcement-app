import React from 'react';

const MyProfilData = (props) => {

    return ( 
        <div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Imię</label>
                    <input className='my-profile-data__input' type="text" defaultValue={props.userFirstName} />
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Nazwisko</label>
                    <input className='my-profile-data__input' type="text" defaultValue={props.userSurname}/>
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Login</label>
                    <input className='my-profile-data__input' type="text" defaultValue={props.userLogin} />
                </div>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Hasło</label>
                    <input className='my-profile-data__input' type="password" defaultValue={props.userPassword} />
                </div>
            </div>
            <div className='col-12 my-profile-data'>
                <div className='col-5 my-profile-data__composition'>
                    <label htmlFor="" className='my-profile-data__label'>Numer telefonu</label>
                    <input className='my-profile-data__input' type="text" defaultValue={props.userNumberPhone} />
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