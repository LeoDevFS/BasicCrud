import { useState,useEffect } from 'react'
import UseFetch from './hooks/UseFetch'

import './App.css'

function App() {
  const {data,loading,error,handleCancelRequest} = UseFetch("http://localhost:2323")




  return (
    <>
    <h1>Contacts</h1>
    <ul>
      {error && <li>{error}</li>}
      {loading && <li>loading...</li> }
      {data?.map((contact)=>(
        <li key={contact._id}>{contact.Name}</li>

      ))}
    </ul>
    {/* <button onClick={handleCancelRequest}>cancel</button> */}

    </>
  )
}

export default App
