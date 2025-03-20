import React from 'react'
import { useParams } from 'react-router-dom'

export const Dynamicrout = () => {
  const {uname}=useParams();
  return (
    <div>Dynamicrout:
      <h1>
        username:{uname}
      </h1>
    </div>
  )
}
