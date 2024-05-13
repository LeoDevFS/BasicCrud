import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AllContactsPage from '../pages/AllContactsPage'
import ContactDetailsPage from '../pages/ContactDetailPage'
import InputCreate from './InputCreate'


function routes() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={AllContactsPage}/>
            <Route path='/id/:_id' Component={ContactDetailsPage} />
            <Route path='/create' Component={InputCreate} />
        </Routes>
    </Router>
  )
}

export default routes