import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    // Wyświetlenie ogłoszeń pasujących do wpisanej frazy z wyszukiwarki
    const arraySearchText = props.announcementItems.filter(item => item.title.toLowerCase().includes(props.searchText.toLowerCase()))
    // console.log(arraySearchText)
    // Wyświetlenie ogłoszeń pasujących do wybranych filtrów oraz wyszukiwań
    
    const searchText = arraySearchText.map(element => {
        var city = element.address ? element.address.city : 'brak';
        var street = element.address ? element.address.street : 'brak';
        var bldNumber = element.address ? element.address.bld_number : 'brak';
        var fleet = element.address ? element.address.fleet : 'brak';
        var code = element.address ? element.address.code : 'brak';
        var image = element.image_href ? element.image_href.image : 'AN'
        if(props.allLocalizationFilter === true && props.isFilterActive === true &&
             props.activeFilter !== '' && element.address !== null &&
              element.address.city !== null && props.activeFilter === element.address.city ){

            return(
                <Announcement
                    key={element.announcement_id}
                    id={element.announcement_id}
                    title={element.title}
                    description={element.description}
                    city={city}
                    street={street}
                    bldNumber={bldNumber}
                    fleet={fleet}
                    code={code}
                    image={image}
                    handleAddToFavourites={props.handleAddToFavourites}
                    handleShowDetails={props.handleShowDetails}
                    isShowDetails={props.isShowDetails}
                    isWatched={props.isWatched}
                    watched={props.watched}
                    adddat={element.adddate}
                />)

            }
             else if (props.allLocalizationFilter !== true ){
            return(
                <Announcement
                    key={element.announcement_id}
                    id={element.announcement_id}
                    title={element.title}
                    description={element.description}
                    city={city}
                    street={street}
                    bldNumber={bldNumber}
                    fleet={fleet}
                    code={code}
                    image={image}
                    handleAddToFavourites={props.handleAddToFavourites}
                    handleShowDetails={props.handleShowDetails}
                    isShowDetails={props.isShowDetails}
                    isWatched={props.isWatched}
                    watched={props.watched}
                    adddat={element.adddate}
                />)
            } else if(props.activeFilter === '' && element.address === null){
            return(
                <Announcement
                    key={element.announcement_id}
                    id={element.announcement_id}
                    title={element.title}
                    description={element.description}
                    city={city}
                    street={street}
                    bldNumber={bldNumber}
                    fleet={fleet}
                    code={code}
                    image={image}
                    handleAddToFavourites={props.handleAddToFavourites}
                    handleShowDetails={props.handleShowDetails}
                    isShowDetails={props.isShowDetails}
                    isWatched={props.isWatched}
                    watched={props.watched}
                    adddat={element.adddate}
            />
            )
        }
        
        
        
    });
    let controller = false;
    const test = searchText.map(item => {
        if(item ===undefined)
        controller = true;
    })
    // const test = searchText.indexOf(undefined)


    return ( 
        <div>
            {props.isShowDetails ? 
                <div className=' announcement__details'>
                    <div className='announcement__details--button-position'>
                        <button className='announcement__details--button' onClick={props.handleCloseDetails}>Zamknij</button>
                    </div>
                    <div className='details-position'>
                    {/* <div className='col-3 details-left'>
                        <div className='announcement__details--image'>
                                An
                        </div>
                    </div> */}
                    <div className='col-12 details-right'>

                        <div className='announcement__details--title'>
                            {props.dAnnouncementId}. {props.dTitleAnnnouncement}
                        </div>
                        <div className='announcement__details--description'>
                            {props.dDescriptionAnnnouncement}
                        </div>
                        <div className='details-right--column'>
                            <div className='announcement__details--location'>Lokalizacja: {props.dLocation === '' ? 'Brak' : props.dLocation}</div>
                            <div className='announcement__details--end'>Data zakończenia: {props.dEndDat}</div>    
                        </div>
                            <div className='announcement__details--number'>Numer telefonu: {props.dphoneNumber}</div>    
                        <div className='photo'>
                            {props.photo === null ? 'BRAK' : 
                            <img className='photo-item' src={`http://localhost:8000${props.photo}`} alt="BRAK ZDJĘCIA" />
                            }
                            
                        </div>                     
                    </div>  
                    </div>                

                    
                </div> 
            :
                null
            }
            {/* {announcements} */}
            {searchText}
            {controller  ? <div className='info-about-result'>To wszystkie rezultaty odnalezione z wybranymi filtrami</div> : null}
            {/* {props.activeFilter !== '' ? arrayCityNotNull : arrayCityWithNull} */}

        </div>
     );
}
 
export default AnnouncementsItems;