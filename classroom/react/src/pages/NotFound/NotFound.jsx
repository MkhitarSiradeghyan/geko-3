import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const [sec, setSec]= useState(5)
    const navigate = useNavigate()
    useEffect(() => {
        const   timer = setTimeout(() => {
            if(sec > 0){
                setSec(s => s - 1)
            }else{
                clearTimeout(timer)
                navigate("/")
            }
        }, 1000)
       
    }, [sec])

  return (
    <>
    <h2>NotFound</h2>
    <h3>Redirect to home page in {sec} seconds</h3>
    </>
  )
}

export default NotFound