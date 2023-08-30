import { useState } from "react";

export const NavMenu = () => {

    const [stateClassName, setStateClassName] = useState('nav-menu__closed');

    const [headerLogoModif, setHeaderLogoModif] = useState('--top');

    window.addEventListener('scroll', () => {
      if ( window.scrollY > 20 ) {
        setHeaderLogoModif('--not-top')
      } else {
        setHeaderLogoModif('--top')
      }
    })

  return (
    <nav className={`nav-menu ${ stateClassName }` }>

        <button className="nav-menu__hamburguer-btn btn" onClick={ () => setStateClassName('nav-menu__opened')}></button>

        <img className="nav-menu__logo"  src="../src/assets/img/logo.svg"/>

        <ul className="nav-menu__links-container">

            <li className="nav-menu__links-container__link"><h3>Home</h3></li>
            <li className="nav-menu__links-container__link"><h3>Videoclips</h3></li>
            <li className="nav-menu__links-container__link"><h3>Albums</h3></li>
            <li className="nav-menu__links-container__link"><h3>Merchandising</h3></li>
            <li className="nav-menu__links-container__link"><h3>Contact</h3></li>

        </ul>

        <button className="nav-menu__close-btn btn" onClick={ () => setStateClassName('nav-menu__closed')}></button>

        <img className={`nav-menu__header-logo nav-menu__header-logo${ headerLogoModif }` }src="../src/assets/img/logo.svg"/>

    </nav>
  )
}
