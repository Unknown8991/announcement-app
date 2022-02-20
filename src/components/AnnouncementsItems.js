import React from 'react';
import Announcement from './Announcement';

const AnnouncementsItems = (props) => {
    // Wyświetlenie ogłoszeń pasujących do wpisanej frazy z wyszukiwarki
    const arraySearchText = props.announcementItems.filter(item => item.title.includes(props.searchText))
    const searchText = arraySearchText.map(element =>(
        <Announcement 
        key={element.announcement_id}
        id={element.announcement_id}
        title={element.title}
        description={element.description}
        location={element.location}
    />
    ))
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