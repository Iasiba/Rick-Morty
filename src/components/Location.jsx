import React from 'react'

const Location = ({ Data }) => {
    return (
        <div className='location'>
            <h2>{Data?.name}</h2>
            <div className='info'>
                <p><span>Word: </span>{Data?.id}</p>
                <p><span>Type: </span>{Data?.type}</p>
                <p><span>Population: </span>{Data?.residents.length}</p>
                <p><span>Dimension: </span>{Data?.dimension}</p>
            </div>

        </div>
    )
}

export default Location