import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import { ContactContext } from '../contexts/ContactProvider'
import Modal from '../components/Modal'

function ContactDetailPage() {
    const { _id } = useParams()
    const { data, loading, error } = UseFetch(`http://localhost:2323/id/${_id}`)

    const {deleteContact} = useContext(ContactContext)
    const [errorDelete,setErrorDelete]= useState("")

    const [modalOpen,setModalOpen]= useState(false)



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
                    <button onClick={()=>setModalOpen(true)}>edit modal</button>
                    < Modal isOpen={modalOpen} closeModal={()=>setModalOpen(false)}/>
                   
                </>
            )}

            <Link to='/'>home</Link>
        </>
    )
}

export default ContactDetailPage