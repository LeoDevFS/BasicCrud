import React, { useContext, useEffect, useState } from 'react'
import { ContactContext } from '../contexts/ContactProvider'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'


function InputUpdate() {
  const [name,setName] = useState('')
  const [lastName,setLastName] = useState('')
  const [number,setNumber] = useState('')
  const [email,setEmail] = useState('')
  const payload = {name,lastName,number,email}

  const { _id } = useParams()
  const { data, loading, error } = UseFetch(`http://localhost:2323/id/${_id}`)

  const { updateContact } = useContext(ContactContext)
  const [errorUpdate, setErrorUpdate] = useState("")
  

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateContact(data._id,payload)
      
      alert("contacto modificado")
    } catch (error) {
      setErrorUpdate("contacto no modificado :  "+ errorUpdate)
    }
  }

  useEffect(() => {
    // Actualizar el estado local del nombre cuando los datos cambien
    if (data) {
      setName(data.name)
    }
  }, [data])

  return (
    <>
      {error && <li>{error}</li>}
      {loading && <li>loading...</li>}
      {data && (
        <>
          <p>{data.name}</p>
        </>
      )}
 <form onSubmit={handleUpdate}>
 <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='name of contact' required/>
 <input type="text" value={lastName}  onChange={(e)=>setLastName(e.target.value)} placeholder='lastName of contact' required/>
 <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='email of contact' required/>
 <input type="number" value={number}  onChange={(e)=>setNumber(e.target.value)} placeholder='number' required/>
 
 <button type='submit'>crear contacto</button>
</form> 




    </>
  )
}

export default InputUpdate
