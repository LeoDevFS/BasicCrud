import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import { ContactContext } from '../contexts/ContactProvider'
import Modal from '../components/Modal'

function ContactDetailPage() {
    const { _id } = useParams()
    const { data, loading, error } = UseFetch(`https://basiccrud-production-ba41.up.railway.app/id/${_id}`)

    const { deleteContact } = useContext(ContactContext)
    const [errorDelete, setErrorDelete] = useState("")

    const [modalOpen, setModalOpen] = useState(false)



    const handleDelete = async () => {
        try {
            await deleteContact(data._id)
            alert("contacto borrado")

        } catch (error) {
            setErrorDelete("contacto no borrado :  " + errorDelete)
        }
    }

    return (
        <>
            {error && <li>{error}</li>}
            {loading && <li>loading...</li>}
            {data && (
                <>
                    <div className="card">
                        <p>Name: {data.name}</p>
                        <p>Last Name: {data.lastName} </p>
                        <p>Contact Number: {data.number}</p>
                        <p>E-mail: {data.email} </p>
                    </div>

                    <div className='editionButtons'>
                        <button className='deleteBtn' onClick={handleDelete}>Delete</button>
                        <button className='updatebtn' onClick={() => setModalOpen(true)}>Edit Contact</button>
                        < Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
                    </div>

                </>
            )}

            <Link className='homeBtn' to='/'>home</Link>
        </>
    )
}

export default ContactDetailPage