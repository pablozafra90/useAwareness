import logoNeg from '../assets/img/logo-neg.svg';
import { useAlert } from '../hooks/useAlert';


export const Footer = () => {

  const { setAlertNav } = useAlert();


  return (

    <footer className="footer-sect">

        <div className='grid-layout'>

            <img className="footer-sect__logo" src={ logoNeg }/>

            <ul className="footer-sect__links"  onClick={() => { setAlertNav() }}>
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
