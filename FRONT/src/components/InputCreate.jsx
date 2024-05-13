import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function InputCreate() {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    
    const urlApiCreate = 'http://localhost:2323/create'
    const [res, setRes]= useState(null)
    const payload = {name,lastName,number,email}

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setRes('')

        try {
          const response = await fetch(urlApiCreate,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)//luego probar mandar directamente el payload con el nombre del OBJETO payload = {name}
          })
          if(response.ok){
            const data = await response.json()
            setRes(`${data.name}${data.lastName}`)
            setName('')
            setLastName('')
            setNumber('')
            setEmail('')
            
          }
          
        } catch (error) {
          console.log(error)
        }
        
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='name of contact' required/>
      <input type="text" value={lastName}  onChange={(e)=>setLastName(e.target.value)} placeholder='lastName of contact' required/>
      <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='email of contact' required/>
      <input type="number" value={number}  onChange={(e)=>setNumber(e.target.value)} placeholder='number' required/>
      
      <button type='submit'>crear contacto</button>
    </form>
    <h2>Se ha creado el contacto: {res}</h2>
    <Link to = '/' >home</Link>
    </>
  )
}

export default InputCreate