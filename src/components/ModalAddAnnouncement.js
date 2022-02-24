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
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Określ lokalizację</label>
                <input className='add-announcement-modal__input' type="text" name='city' onChange={props.handleInputAnnouncement} />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Ulica</label>
                <input className='add-announcement-modal__input' type="text" name='street' onChange={props.handleInputAnnouncement} />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Numer budynku</label>
                <input className='add-announcement-modal__input' type="text" name='bldNumber' onChange={props.handleInputAnnouncement} />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Numer mieszkania</label>
                <input className='add-announcement-modal__input' type="text" name='fleet' onChange={props.handleInputAnnouncement} />
            </div>
            <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Kod pocztowy</label>
                <input className='add-announcement-modal__input' type="text" name='code' onChange={props.handleInputAnnouncement} />
            </div>

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