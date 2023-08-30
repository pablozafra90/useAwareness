import logoNeg from '../assets/img/logo-neg.svg';

export const Footer = () => {
  return (

    <footer className="footer-sect">

        <div className='grid-layout'>

            <img className="footer-sect__logo" src={ logoNeg }/>

            <ul className="footer-sect__links">
                <li className="footer-sect__links__link">Legal notice</li>
                <li className="footer-sect__links__link footer-sect__links__link--separator">·</li>
                <li className="footer-sect__links__link">Privacy Policy"</li>
                <li className="footer-sect__links__link footer-sect__links__link--separator">·</li>
                <li className="footer-sect__links__link">Cookies Policy</li>
                <li className="footer-sect__links__link footer-sect__links__link--separator">·</li>
                <li className="footer-sect__links__link">Contact</li>
        </ul>

        </div>

        

    </footer>

  )
}
