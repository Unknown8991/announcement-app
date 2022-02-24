import React from 'react';
import FavouriteItems from './FavouriteItems';

const FavoriteAnnouncements = (props) => {

    return ( 
        <div>
            <FavouriteItems myFavourites={props.myFavourites}/>
        </div>
     );
}
 
export default FavoriteAnnouncements;