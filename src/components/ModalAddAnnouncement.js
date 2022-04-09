import React from 'react';

const ModalAddAnnouncement = (props) => {
    return ( 
        <div className='add-announcement-modal__item' onClick={()=> props.handleUpdateStateAnnouncementForm()}>
            <div className='col-12 button-exit__end'>
                <button className='button-exit col-2' onClick={props.handleCloseForm}>WRÓĆ</button>
            </div>
            <div className='add-announcement-modal__text'>Dodaj ogłoszenie</div>
            <div className='add-announcement-modal__form'>

            <div className='add-announcement-modal__form col-12'>
                <label className='add-announcement-modal--text col-10' htmlFor="">Wpisz tytuł</label>
                <input className='add-announcement-modal__input col-10' maxLength={120} type="text" name='title' onChange={props.handleInputAnnouncement} />
                <label className='col-10 register-column__info register-column__info--end'>max 120 znaków</label>
            </div>
            <div className='add-announcement-modal__form col-12'>
                <label className='add-announcement-modal--text col-10' htmlFor="">Dodaj opis</label>
                <textarea 
                    className='add-announcement-modal__input textarea col-10' maxLength={200} type="text" name='description' onChange={props.handleInputAnnouncement}> 
                </textarea>
                <label className='col-10 register-column__info register-column__info--end'>max 200 znaków</label>
            </div>
            
            <div className='add-announcement-modal__position col-10'>
                <div className='add-ann-form col-5'>
                    <label className='add-announcement-modal--text ' htmlFor="">Określ lokalizację</label>
                    <input className='add-announcement-modal__input ' maxLength={30} type="text" name='city' onChange={props.handleInputAnnouncement} />
                    <label className='col-12 register-column__info register-column__info--end' maxLength={30}>max 30 znaków</label>
                </div>
                <div className='add-ann-form col-5'>
                    <label className='add-announcement-modal--text' htmlFor="">Ulica</label>
                    <input className='add-announcement-modal__input' maxLength={30} type="text" name='street' onChange={props.handleInputAnnouncement} />
                    <label className='col-12 register-column__info register-column__info--end' >max 30 znaków</label>
                </div>
            </div>
            <div className='add-announcement-modal__position--last col-10'>
                <div className='col-5 add-announcement-modal__position--twice'>
                    <div className='add-ann-form col-5'>
                        <label className='add-announcement-modal--text' htmlFor="">Numer budynku</label>
                        <input className='add-announcement-modal__input' maxLength={10} type="text" name='bldNumber' onChange={props.handleInputAnnouncement} />
                        <label className='col-12 register-column__info register-column__info--end' >max 10 znaków</label>

                    </div>
                    <div className='add-ann-form col-5'>
                        <label className='add-announcement-modal--text' htmlFor="">Numer mieszkania</label>
                        <input className='add-announcement-modal__input'  maxLength={10} type="text" name='fleet' onChange={props.handleInputAnnouncement} />
                        <label className='col-12 register-column__info register-column__info--end' >max 10 znaków</label>
                    </div>
                </div>
                <div className='add-ann-form col-5 '>
                    <label className='add-announcement-modal--text col-5' htmlFor="">Kod pocztowy</label>
                    <input className='add-announcement-modal__input col-5' pattern="[0-9]" maxLength={5} type="text" name='code' onChange={props.handleInputAnnouncement} />
                    <label className='col-12 register-column__info register-column__info--end' >max 5 znaków</label>
                    <input className='file-input' type="file" name='photo' id='file' onChange={props.handleInputAnnouncement}/> 
                </div>
            </div>
                <label htmlFor="" className='col-11 register-column__info register-column__info--left'>* Wszystkie pola są wymagane</label>
                <label htmlFor="" className='col-11 register-column__info register-column__info--left'>* Pola: Numer budynku, numer mieszkania, kod pocztowy proszę uzupełnić cyframi</label>
            </div>
            {/* <div className='add-announcement-modal__form col-12'>
                <label className='add-announcement-modal--text' htmlFor="">Ulica</label>
                <input className='add-announcement-modal__input' type="text" name='street' onChange={props.handleInputAnnouncement} />
            </div> */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Numer budynku</label>
                <input className='add-announcement-modal__input' type="text" name='bldNumber' onChange={props.handleInputAnnouncement} />
            </div> */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Numer mieszkania</label>
                <input className='add-announcement-modal__input' type="text" name='fleet' onChange={props.handleInputAnnouncement} />
            </div> */}
            {/* <div className='add-announcement-modal__form'>
                <label className='add-announcement-modal--text' htmlFor="">Kod pocztowy</label>
                <input className='add-announcement-modal__input' type="text" name='code' onChange={props.handleInputAnnouncement} />
            </div> */}

            {/* </div> */}
            {props.isErrorAnn ? <div className='register-column__info--red'>{props.errorAnn}</div> : null}
            {props.isFormAnnouncementCorrect ? 
                <button className='add-announcement-modal__button' onClick={props.handleSendAnnouncement}>Wyślij</button>
                : 
                <button className='add-announcement-modal__button--disable'>Wyślij</button>
             }
            
        </div>
     );
} 

export default ModalAddAnnouncement;