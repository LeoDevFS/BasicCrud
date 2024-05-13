import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //const [controller,setController] = useState(null)

    useEffect(() => {
        //const abortController = new AbortController() //este nuevo componente es para abortar la decision de mandar el archivo si deseamos evitar un uso de recursos inutil
       // setController(abortController)
        setLoading(true)
        fetch(url,/*{signal:abortController.signal}*/)
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

        //return () => abortController.abort()//asi se le agregaria una señal 

    }, [])

    // const handleCancelRequest = () => {//el scope del useEffect no llega al handle request, asi que me veo en la tesitura de añadir otro estado (controller)
    //     if (controller){
    //         controller.abort()
    //         setError("request Cancelled")

    //     }
    // }



    return { data, loading, error /*handleCancelRequest*/ }
}

export default UseFetch