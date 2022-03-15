import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    // Wyświetlenie ogłoszeń pasujących do wpisanej frazy z wyszukiwarki
    const arraySearchText = props.announcementItems.filter(item => item.title.includes(props.searchText))
    
    // Wyświetlenie ogłoszeń pasujących do wybranych filtrów oraz wyszukiwań
 
    const searchText = arraySearchText.map(element => {
        var city = element.address ? element.address.city : 'brak';
        var street = element.address ? element.address.street : 'brak';
        var bldNumber = element.address ? element.address.bld_number : 'brak';
        var fleet = element.address ? element.address.fleet : 'brak';
        var code = element.address ? element.address.code : 'brak';

        if(props.allLocalizationFilter === true && props.isFilterActive === true && props.activeFilter !== '' && element.address !== null && element.address.city !== null && props.activeFilter === element.address.city ){

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
                    handleAddToFavourites={props.handleAddToFavourites}
                    handleShowDetails={props.handleShowDetails}
                    isShowDetails={props.isShowDetails}
                    isWatched={props.isWatched}
                    watched={props.watched}
            />
            )
        }  else if (props.allLocalizationFilter !== true ){

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
                handleAddToFavourites={props.handleAddToFavourites}
                handleShowDetails={props.handleShowDetails}
                isShowDetails={props.isShowDetails}
                isWatched={props.isWatched}
                watched={props.watched}
            />
            )
        }
        else if(props.activeFilter === '' && element.address === null){
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
                handleAddToFavourites={props.handleAddToFavourites}
                handleShowDetails={props.handleShowDetails}
                isShowDetails={props.isShowDetails}
                isWatched={props.isWatched}
                watched={props.watched}
            />
            )
        }


        // return (
        // <Announcement
        //     key={element.announcement_id}
        //     id={element.announcement_id}
        //     title={element.title}
        //     description={element.description}
        //     city={city}
        //     street={street}
        //     bldNumber={bldNumber}
        //     fleet={fleet}
        //     code={code}
        //     handleAddToFavourites={props.handleAddToFavourites}
        //     handleShowDetails={props.handleShowDetails}
        //     isShowDetails={props.isShowDetails}
        //     isWatched={props.isWatched}
        //     watched={props.watched}
        // />
        // )
        
        });
    // Wyświetlenie wszystkich ogłoszeń 
    // const announcements = props.announcementItems.map(announcement =>(
    // <Announcement 
    //     key={announcement.announcement_id}
    //     id={announcement.announcement_id}
    //     title={announcement.title}
    //     description={announcement.description}
    //     location={announcement.location}
    // />
    // ) )
    return ( 
        <div>
            {props.isShowDetails ? 
                <div className=' announcement__details'>
                    <div className='announcement__details--button-position'>
                        <button className='announcement__details--button' onClick={props.handleCloseDetails}>Zamknij</button>
                    </div>
                    <div className='details-position'>
                    <div className='col-3 details-left'>
                        <div className='announcement__details--image'>
                                An
                        </div>
                    </div>
                    <div className='col-9 details-right'>

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
                    </div>                    
                    </div>                

                    
                </div> 
            :
                null
            }
            {/* {announcements} */}
            {searchText}
            {/* {props.activeFilter !== '' ? arrayCityNotNull : arrayCityWithNull} */}

        </div>
     );
}
 
export default AnnouncementsItems;