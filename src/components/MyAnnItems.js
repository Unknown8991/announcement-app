import React from 'react';
import MyItem from './MyItem';
const MyAnnItems = (props) => {

        const myAddAnnouncements = props.myAnnouncements.map(element =>{
            var city = element.address ? element.address.city : 'brak';
            var street = element.address ? element.address.street : 'brak';
            var bldNumber = element.address ? element.address.bld_number : 'brak';
            var fleet = element.address ? element.address.fleet : 'brak';
            var code = element.address ? element.address.code : 'brak';
            return(
                <MyItem 
                    key={element.announcement_id}
                    id={element.announcement_id}
                    title={element.title}
                    description={element.description}
                    city={city}
                    street={street}
                    bldNumber={bldNumber}
                    fleet={fleet}
                    code={code}
                    handleDeleteAnnouncements={props.handleDeleteAnnouncements}
                    handleConfirmDeleteAnnouncement={props.handleConfirmDeleteAnnouncement}
                    handleEditAnnouncement={props.handleEditAnnouncement}
                    
                />
            )
        }

     )
    return ( 
        <div>
            <div>
                {props.isEditAnnouncement ? 
                    <div className=' announcement__edit'>
                    <div className='announcement__details--button-position'>
                        <button className='announcement__details--button' onClick={props.handleCloseEditAnnouncement}>Zamknij</button>
                    </div>
                    <div className='details-position'>
                    <div className='col-3 details-left'>
                        <div className='announcement__details--image'>
                                 An
                        </div>
                    </div>
                    <div className='col-9 details-right'>
            
                        <div className='announcement__edit--title '>
                                        {/* {props.dAnnouncementId}. {props.eTitleAnnouncement} */}
                            <div className='announcement__edit--text col-12'>Tytuł</div> 
                                        {/* <input className='edit-account-data__input' defaultValue={props.eTitleAnnouncement} type="text" name='eTitle' onChange={props.handleChangeEditAnnouncement} /> */}
                            <textarea className='announcement__edit--textarea col-10' defaultValue={props.title} type="text" name='eTitle' onChange={props.handleChangeEditAnnouncement} >
                            </textarea>
                        </div>
                        <div className='announcement__edit--title'>
                                        {/* {props.eDescriptionAnnouncement} */}
                            <div className='announcement__edit--text col-12'>Opis</div> 
                            <textarea 
                                                // className='add-announcement-modal__input textarea col-10' type="text" name='eDescription' defaultValue={props.eDescriptionAnnouncement} onChange={props.handleInputAnnouncement}> 
                                    className='announcement__edit--tadesc col-10' type="text" name='eDescription' defaultValue={props.description} onChange={props.handleChangeEditAnnouncement}> 
                            </textarea>
                                        {/* <input className='edit-account-data__input' defaultValue={props.eDescriptionAnnouncement} type="text" name='eDescription' onChange={props.handleChangeEditAnnouncement} /> */}
                        </div>
                        <div className='announcement__edit--title col-12'>
                                        {/* <div className='announcement__details--location'>Lokalizacja: {props.eCityAnnouncement === '' ? 'Brak' : props.eCityAnnouncement}</div> */}
                                        <div className='announcement__edit--text '>Lokalizacja</div> 
                                        {/* <input className='edit-account-data__input' defaultValue={props.eCityAnnouncement} type="text" name='eLocation' onChange={props.handleChangeEditAnnouncement} /> */}
                            <input className='announcement__edit--input col-10' defaultValue={props.city} type="text" name='eLocation' onChange={props.handleChangeEditAnnouncement} />
                                        {/* <div className='announcement__details--end'>Data zakończenia: {props.dEndDat}</div>     */}
                        </div>
                            <div className='announcement__edit--title'>
                                <div className='announcement__edit--text col-12'>Numer telefonu:</div> 
                                <input className='announcement__edit--input col-5' defaultValue={props.phoneNumber} type="text" name='ePhoneNumber' onChange={props.handleChangeEditAnnouncement} />
                            </div>    
                            <div className='announcement__edit--title'>
                                <div className='announcement__edit--text col-12'>Ulica:</div> 
                                            {/* <input className='edit-account-data__input' defaultValue={props.eStreetAnnouncement} type="text" name='eStreet' onChange={props.handleChangeEditAnnouncement} /> */}
                                <input className='announcement__edit--input col-7' defaultValue={props.street} type="text" name='eStreet' onChange={props.handleChangeEditAnnouncement} />
                            </div>    
                            <div className='announcement__edit--title'>
                                <div className='announcement__edit--text col-12 '>Numer domu:</div>  
                                {/* <input className='edit-account-data__input' defaultValue={props.eBldNumberAnnouncement} type="text" name='eFleet' onChange={props.handleChangeEditAnnouncement} /> */}
                                <input className='announcement__edit--input col-2' defaultValue={props.bldNumber} type="text" name='eBldNumber' onChange={props.handleChangeEditAnnouncement} />
                            </div>    
                            <div className='announcement__edit--title'>
                                <div className='announcement__edit--text col-12'>Numer mieszkania: </div> 
                                {/* <input className='edit-account-data__input' defaultValue={props.eFleetAnnouncement} type="text" name='eFleet' onChange={props.handleChangeEditAnnouncement} /> */}
                                <input className='announcement__edit--input col-2' defaultValue={props.fleet} type="text" name='eFleet' onChange={props.handleChangeEditAnnouncement} />
                            </div>    
                            <div className='announcement__edit--title'>
                                <div className='announcement__edit--text col-12'>Kod pocztowy:</div>  
                                {/* <input className='edit-account-data__input' defaultValue={props.eCodeAnnouncement} type="text" name='eCode' onChange={props.handleChangeEditAnnouncement} /> */}
                                <input className='announcement__edit--input col-3' defaultValue={props.code} type="text" name='eCode' onChange={props.handleChangeEditAnnouncement} />
                            </div>    
                    </div>                    
                     </div>                
                    <div>
                        <button className='announcement__edit--save' onClick={props.handleSendEditAnnouncement}>Edytuj</button>
                        {props.isEditInfo ?
                            <div>Dane zostały zmienione</div>
                                :
                            null
                        }
                    </div>
                                
                </div> 
                
                : null}
            </div>
           {myAddAnnouncements}
        </div>
     );
}
 
export default MyAnnItems;