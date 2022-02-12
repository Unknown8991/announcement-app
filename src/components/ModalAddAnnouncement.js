import React from 'react';

const ModalAddAnnouncement = (props) => {
    return ( 
        <div className='add-announcement-modal__item' onClick={()=> props.handleUpdateStateAnnouncementForm()}>
            <div className='col-12 button-exit__end'>
                <button className='button-exit col-2' onClick={props.handleCloseForm}>EXIT</button>
            </div>
            <div className='add-announcement-modal__text'>Dodaj ogłoszenie</div>
            <div className='add-announcement-modal__form'>

            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Wpisz tytuł</label>
                <input className='add-announcement-modal__input' type="text" name='title' onChange={props.handleInputAnnouncement} />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Dodaj opis</label>
                <input className='add-announcement-modal__input' type="text" name='description' onChange={props.handleInputAnnouncement} />
            </div>
            {/* Potrzebny endpoint dla location */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Określ lokalizację</label>
                <input className='add-announcement-modal__input' type="text" name='location' onChange={props.handleInputAnnouncement} />
            </div> */}
            {/* Data dodania powinna być automatycznie pobierana jako aktualny dzień */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Data dodania</label>
                <input className='add-announcement-modal__input' type="text" name='date' />
            </div> */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Data zakończenia</label>
                <input className='add-announcement-modal__input' type="text" name='date' onChange={props.handleInputAnnouncement} />
            </div> */}
            </div>
            {props.isFormAnnouncementCorrect ? 
                <button className='add-announcement-modal__button' onClick={props.handleSendAnnouncement}>Wyślij</button>
                : 
                <button className='add-announcement-modal__button--disable'>Wyślij</button>
             }
            
        </div>
     );
} 

export default ModalAddAnnouncement;