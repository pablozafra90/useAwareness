import PropTypes from 'prop-types';
import ytMusic from '../../assets/img/platforms/Youtube-Music.svg';
import dezeer from '../../assets/img/platforms/Dezeer.svg';
import spotify from '../../assets/img/platforms/spotify.svg';

export const AlbumItem = ({ title, src, year, tracks, duration, price }) => {


  return (

    <li className="albums-sect__slider-container__items-grid__item">

        <img className="albums-sect__slider-container__items-grid__item__cover" src={ src } />

        <div className="albums-sect__slider-container__items-grid__item__info">

            <h3>{ title }</h3>
            <p>
                { year }<br/>
                Tracks: { tracks }<br/>
                Duration { duration } min<br/>
            </p>
            <p className="price">
                { price }€
            </p>

            <button className="albums-sect__slider-container__items-grid__item__info__btn btn btn--01">Add to chart</button>

            <p>Listen on:</p>

            <div className="albums-sect__slider-container__items-grid__item__info__platforms">
                <img className="albums-sect__slider-container__items-grid__item__info__platforms__icon" src={ytMusic}></img>
                <img className="albums-sect__slider-container__items-grid__item__info__platforms__icon" src={dezeer}></img>
                <img className="albums-sect__slider-container__items-grid__item__info__platforms__icon" src={spotify}></img>
            </div>

        </div>

    </li>

  )

}


// AlbumItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   songs: PropTypes.number.isRequired,
//   duration: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
// }