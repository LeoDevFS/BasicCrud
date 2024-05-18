import React, {  createContext, useState } from 'react'


export const ContactContext = createContext()

export function ContactProvider({children}) {
  
 

  const [contact,setContact]=useState([])
  const [error,setError] = useState([])

  const deleteContact = async(id) =>{

    const urlDelete = `https://basiccrud-production-ba41.up.railway.app/id/${id}`
    try {
      const res = await fetch(urlDelete,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
      })
      if(res.ok){
        console.log("ok")
      }
    } catch (error) {
      console.log(error)
      
    }

  }

  const updateContact = async(id,payload)=>{
    const urlUpdate = `https://basiccrud-production-ba41.up.railway.app/id/${id}`
    try {
      const res = await fetch(urlUpdate,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
      })
      if(res.ok){
        console.log("updated")
      }
    } catch (error) {
      console.log(error)
      
    }
  }
 

  return (
    <ContactContext.Provider value={{deleteContact,updateContact}}>
    { children }
    </ContactContext.Provider>
  )
}

export default ContactContext