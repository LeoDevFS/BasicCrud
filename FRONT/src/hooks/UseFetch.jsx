import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
   

    useEffect(() => {
    
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setData(data)
            })
            .catch((error)=>{
                if(error.name === "AbortError"){
                    console.log("request cancelled")
                }else{
                    setError(error)
                }
            })

       

    }, [])





    return { data, loading, error  }
}

export default UseFetch