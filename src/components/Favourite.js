import React from 'react';

const Favourtie = (props) => {
    return ( 
        <div>
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
            <div className='col-3 announcement announcement__adding-info'>
                {/* <div onClick={()=>props.handleShowDetails(props.id)}>test</div> */}
            <div className= 'announcement__adding-info--remove-watched' onClick={()=>props.handleRemoveFromWatched(props.id)}>
                        Usuń z obserwowanych
                    </div>
                {/* <div className='announcement__adding-info--date'>Data dodania: 01.02.2022</div>  */}
                <div className='announcement__adding-info--date'>Data dodania: {props.adddate.substr(0,10)}</div> 
                {/* <div className='announcement__adding-info--date'>Data zakończenia: 01.02.2022</div>  */}
                <div className='announcement__adding-info--location'>Lokalizacja: {props.city}</div>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default Favourtie;