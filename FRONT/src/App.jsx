
import Routes from './components/Routes'
import { ContactProvider } from './contexts/ContactProvider'
import navLogo from "./assets/navLogo.png"
import banner from "./assets/banner.png"
import logo from './assets/logo.png'


import './App.css'

function App() {


  return (
    <>
      <ContactProvider>
        <div className="newBody">
          <nav className='sidebar'>
            <a href="#navLogo"><img src={navLogo} alt="navLogo" /></a>
            <a href="">Shortcuts Hub</a>
            <a href="">Profile</a>
            <a href="">Panel de Actividades</a>
            <a href="">learning Hub</a>
            <a href="">Calendario</a>
            <a href="">Mensajes</a>
            <a href="">Calificaciones</a>
            <a href="">Herramientas</a>
            <a href="">Cerrar Sesion</a>
          </nav>
          <div className='homeAll+Banner'>
            <div className='bannerContainer'>
              <div>
                <img src={banner} alt="banner"  className='bannerimg'/>
                <div className='logoContainer'>
               
                </div>

              </div>
            </div>
           
            <div className="bodyOperator">
            <Routes />

            </div>
          </div>
        </div>

      </ContactProvider>
    </>
  )
}

export default App
