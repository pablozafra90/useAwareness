import videoDesktop from '../assets/video/header-video-background-desktop.mp4'
import videoMobile from '../assets/video/header-video-background-mobile.mp4'
import logo from '../assets/img/logo.svg';

export const Header = () => {
  return (
    <header>

      <div className="bg-video-container">

        <div className="bg-video-container__bg-video-wrapper">

          <video className="bg-video-container__bg-video-wrapper__bg-video" src={videoDesktop} autoPlay muted playsInline loop></video>

        </div>

      </div>        

      <div className="trasparence bg-black"></div>

      <img className="header-logo" src={logo}></img>

      <div className="header-container grid-layout">

            <div className="header-container__h1-container">

                <div className="header-container__h1-container__h1-content">

                    <h1>YOU WOKE UP, BREAK SOMETHING, BREATHE, JUMP, NOTHING MATTERS...</h1>

                </div>

            </div>

        </div>

    </header>
  )
}