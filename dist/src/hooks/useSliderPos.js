import { useState, useEffect } from 'react';
import { albums } from '../data/albums';

export const useSliderPos = () => {

    const [position, setPosition] = useState(0);
  
    const vpWd = window.innerWidth;
    const albumsLenth = albums.length;
  
    const leftPropGrid = () => {
        if ( vpWd >= 720 ) {
            return vpWd * 0.25  - position * vpWd * 0.5;
        } else {
            return - position * vpWd;
        }
    }

    const setSliderPos = ( pos ) => {
        if ( position + pos >= 0 && position + pos < albumsLenth ) {
            setPosition(position + pos);
        }
        
    }
    
    
    const setVisible = () => {
        const items = document.getElementsByClassName('albums-sect__slider-container__items-grid__item');
        const itemsArray = Array.from(items);

        Array.from(
            document.getElementsByClassName('albums-sect__slider-container__items-grid__item')
            ).map( (item, index) => {
                if (index === position) {
                    item.classList.add('item-selected'); 
                } else {
                    item.classList.remove('item-selected'); 
                }

            });
    }

    useEffect( () => {
        setVisible()
    }, [position]);
    
    //console.log( position );

    return {
        leftPropGrid,
        setSliderPos,
    }
}
