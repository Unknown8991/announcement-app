import React from 'react';
import Favourtie from './Favourite';

const FavouriteItems = (props) => {
    const favourites = props.myFavourites.map(element =>{
        var city = element.address ? element.address.city : 'brak';
        var street = element.address ? element.address.street : 'brak';
        var bldNumber = element.address ? element.address.bld_number : 'brak';
        var fleet = element.address ? element.address.fleet : 'brak';
        var code = element.address ? element.address.code : 'brak';
        return(
            <Favourtie 
                key={element.announcement_id}
                id={element.announcement_id}
                title={element.title}
                description={element.description}
                city={city}
                street={street}
                bldNumber={bldNumber}
                fleet={fleet}
                code={code}
                handleRemoveFromWatched={props.handleRemoveFromWatched}
            />    
        )
    }
    )
    return ( 
        <div>
            {favourites}     
        </div>
     );
}
 
export default FavouriteItems;