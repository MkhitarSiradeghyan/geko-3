import React from 'react'
import { useParams } from 'react-router'

const Details = () => {

    const {hamar, anun} = useParams()


    
  return (
    <h1>{anun}: {hamar}</h1>
  )
}

export default Details