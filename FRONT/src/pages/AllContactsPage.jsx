import React from 'react'
import UseFetch from '../hooks/UseFetch'
import { Link } from 'react-router-dom'


function AllContactsPage() {
    const { data, loading, error } = UseFetch("http://localhost:2323")

  return (
      <>
      <h1 className="title">Contacts</h1>
      <ul className="containerList">
        {error && <li className="error">{error}</li>}
        {loading && <li className="loading">loading...</li>}
        {data?.map((contact) => (
          <Link to={`/id/${contact._id}`} key={contact._id} className="contact"> {contact.name} </Link>
        ))}
      </ul>
      <Link to='/create'>Crear</Link>
    </>
  )
}

export default AllContactsPage