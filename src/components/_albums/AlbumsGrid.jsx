import { albums } from '../../data/albums';
import { AlbumItem } from './AlbumItem';


export const AlbumsGrid = ( { leftPos } ) => {

  //console.log("AlbumGrid pintado con pos: " + leftPos());

  return (
    <ul className="albums-sect__slider-container__items-grid" style={{left: `${ leftPos() }px`}}>
      
      {
        albums.map( album => (
          
          <AlbumItem
            key={ album.id }
            { ...album }
            />
        ) )
      }

    </ul>
  )
}
