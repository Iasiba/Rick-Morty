import React from 'react'
import UseData from '../Hook/UseData'
const Resident = ({resident}) => {
    const {Data}=UseData(resident)
  return (
    <div className='resident'>
        <img src={Data?.image} alt="" />
        <p><span>Name: </span>{Data?.name}</p>
        <p><span>Status: </span>{Data?.status}</p>
        <p><span>Origin: </span>{Data?.origin.name}</p>
        <p><span>type: </span>{Data?.type}</p>
    </div>
  )
}

export default Resident