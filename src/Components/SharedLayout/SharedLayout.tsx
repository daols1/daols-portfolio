import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menu from '../Main-menu/Menu';


function SharedLayout() {
  return (
  <> 
    <Menu/>
      <Outlet/>
    <Footer/>
  </>
  )
}

export default SharedLayout