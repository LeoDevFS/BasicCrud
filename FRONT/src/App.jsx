
import Routes from './components/Routes'
import {ContactProvider}  from './contexts/ContactProvider'

import './App.css'

function App() {


  return (
    <>
      <ContactProvider>
        <Routes />
      </ContactProvider>
    </>
  )
}

export default App
