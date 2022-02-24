import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    // Wyświetlenie ogłoszeń pasujących do wpisanej frazy z wyszukiwarki



    const arraySearchText = props.announcementItems.filter(item => item.title.includes(props.searchText))

    const searchText=arraySearchText.map(element => {
        var city = element.address ? element.address.city : 'brak';
        var street = element.address ? element.address.street : 'brak';
        var bldNumber = element.address ? element.address.bld_number : 'brak';
        var fleet = element.address ? element.address.fleet : 'brak';
        var code = element.address ? element.address.code : 'brak';
        // var city = element.address ? element.address.city : 'brak';
        
        return (
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
        />
        )
        });
    // const searchText = arraySearchText.map(element =>(
        
    //     <Announcement 
    //         key={element.announcement_id}
    //         id={element.announcement_id}
    //         title={element.title}
    //         description={element.description}
            
    //     />
    

    //     ))

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
            {/* {announcements} */}
            {searchText}
        </div>
     );
}
 
export default AnnouncementsItems;