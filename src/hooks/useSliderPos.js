import { useState } from 'react';
import { albums } from '../data/albums';

export const useSliderPos = () => {

    const [position, setPosition] = useState(0);
  
    const vpWd = window.innerWidth;
    const albumsLenth = albums.length;
  
    const leftPropGrid = () => {
        return vpWd * 0.25  - position * vpWd * 0.5;
    }
    const setSliderPos = ( pos ) => {
        if ( position + pos >= 0 && position + pos < albumsLenth ) {
            setPosition(position + pos);
        }
  
    } 
    
    //console.log( position );

    return {
        leftPropGrid,
        setSliderPos,
    }
}
