import './assets/styles/style.scss';
import { Header } from './components/header';
import { NextShows } from './components/NextShows';
import { Albums } from './components/Albums';
import { Merchandising } from './components/Merchandising';
import { Business } from './components/Business';
import { Footer } from './components/footer';
import { NavMenu } from './components/NavMenu';

export const UseAwarenessHomePage = () => {

  return (
    <>
      <NavMenu />
      <Header />
      <NextShows />
      <Albums />
      <Merchandising />
      <Business />
      <Footer />
    </>
  )

}
