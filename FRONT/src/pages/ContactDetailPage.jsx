import React from 'react'
import { Link,useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'

function ContactDetailPage() {
    const {_id} =useParams()
    const {data,loading,error}=UseFetch(`http//localhost:2323/id/66425d6ada9c4e81abfb6ec0`)
    console.log(data)
  return (
<>
 <Link to='/'>home</Link>
</>
  )
}

export default ContactDetailPage