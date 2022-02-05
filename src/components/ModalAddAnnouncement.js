import React from 'react';

const ModalAddAnnouncement = () => {
    return ( 
        <div className='add-announcement-modal__item'>
            <div className='add-announcement-modal__text'>Dodaj ogłoszenie</div>
            <div className='add-announcement-modal__form'>

            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Wpisz tytuł</label>
                <input className='add-announcement-modal__input' type="text" />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Dodaj opis</label>
                <input className='add-announcement-modal__input' type="text" />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Określ lokalizację</label>
                <input className='add-announcement-modal__input' type="text" />
            </div>
            </div>
            
        </div>
     );
} 

export default ModalAddAnnouncement;