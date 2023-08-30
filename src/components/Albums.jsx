import { AlbumsGrid } from './_albums/AlbumsGrid';
import { useSliderPos } from '../hooks/useSliderPos';

export const Albums = () => {

    const { leftPropGrid, setSliderPos } = useSliderPos();

  return (
    <section className="albums-sect">

        <div className="grid-layout">
            <div className="albums-sect__Title">
                <h2 className='albums-sect__Title__copy'>ALBUMS</h2>
                <p className='albums-sect__Title__subcopy'>Get a physical record</p>
            </div>
        </div>

        <div className="albums-sect__slider-container">

            
            <AlbumsGrid leftPos={ leftPropGrid } />

            <div className="albums-sect__slider-container__btns-container">
            
                <button className="albums-sect__slider-container__btns-container__btn albums-sect__slider-container__btns-container__btn--left btn" onClick={() => { setSliderPos(-1) }}>
                    {/* <img className="albums-sect__slider-container__btns-container__btn__arrow albums-sect__slider-container__btns-container__btn--left__arrow" src="../src/assets/img/arrow.svg"/> */}
                </button>
                
                <button className="albums-sect__slider-container__btns-container__btn albums-sect__slider-container__btns-container__btn--right btn" onClick={() => { setSliderPos(1) }}>
                    {/* <img className="albums-sect__slider-container__btns-container__btn__arrow" src="../src/assets/img/arrow.svg"/> */}
                </button>

            </div>

        </div>

    </section>
  )

}
