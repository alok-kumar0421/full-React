import React from 'react'
import { useParams } from 'react-router-dom'

const CourcesDetails = () => {
    const params = useParams()
  return (
    <div>
        <h1>{params.id} CourcesDetails</h1>
    </div>
  )
}

export default CourcesDetails