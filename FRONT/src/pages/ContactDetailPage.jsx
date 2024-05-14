import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import { ContactContext } from '../contexts/ContactProvider'

function ContactDetailPage() {
    const { _id } = useParams()
    const { data, loading, error } = UseFetch(`http://localhost:2323/id/${_id}`)

    const {deleteContact} = useContext(ContactContext)
    const [errorDelete,setErrorDelete]= useState("")

    const handleDelete = async()=>{
        try {
            await deleteContact (data._id)
            alert("contacto borrado")
            
        } catch (error) {
            setErrorDelete("contacto no borrado :  "+ errorDelete)
        }
    }

    return (
        <>
            {error && <li>{error}</li>}
            {loading && <li>loading...</li>}
            {data && (
                <>
                    <p>{data.name}</p>
                    <button onClick={handleDelete}>delete</button>
                   
                </>
            )}

            <Link to='/'>home</Link>
        </>
    )
}

export default ContactDetailPage