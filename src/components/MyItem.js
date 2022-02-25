import React from 'react';

const MyItem = (props) => {
    return ( 
        <div className='col-12 announcement-list__item'>
        <div className=' announcement announcement__image'>
            An
        </div>
        <div className='col-11 between'>

        <div className='announcement announcement__direction-items'>
            <div className='announcement announcement__title'>
                {props.id}. {props.title} 
            </div>
            <div className='col-10 announcement announcement__description'>
                {props.description}
            </div>
        </div>
        <div className='col-2 announcement announcement__adding-info'>
        <div className='col-12 announcement-favourite'>
                    <div className='announcement__adding-info--favourite' onClick={()=>props.handleDeleteAnnouncements(props.id)}>
                        D
                    </div>
                </div>
            <div className='announcement__adding-info--date'>Data dodania: 01.02.2022</div> 
            {/* <div className='announcement__adding-info--date'>Data zakończenia: 01.02.2022</div>  */}
            <div className='announcement__adding-info--location'>Lokalizacja: {props.city}</div>
        </div>
        </div>
    </div>
     );
}
 
export default MyItem;