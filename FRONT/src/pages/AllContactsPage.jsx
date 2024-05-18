import React from 'react'
import UseFetch from '../hooks/UseFetch'
import { Link } from 'react-router-dom'


function AllContactsPage() {
    const { data, loading, error } = UseFetch("https://basiccrud-production-ba41.up.railway.app")
     // <Link to={`/id/${contact._id}`} key={contact._id} className="contactDetailLink"> {contact.name} {contact.email}</Link>

  return (
      <>
      <div className="workSpaceContainer">

      <h1 className="title">Contacts</h1>
      <ul className="containerList">
        {error && <li className="error">{error}</li>}
        {loading && <li className="loading">loading...</li>}
         
          <table className='tabla'>
            <tr>
              <th>Nombre</th>
              <th>apellido</th>
              <th>email</th>
              <th>numero</th>
            </tr>
        {data?.map((contact) => (
          
            <tr className="contactDetailLink">
              <td ><Link to={`/id/${contact._id}`} key={contact._id} > {contact.name}</Link></td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
            </tr>
        ))}
          </table>
      </ul>
      <Link to='/create' className="createButton">Create New Contact</Link>
      </div>
    </>
  )
}

export default AllContactsPage