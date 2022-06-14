import React from 'react'

const InputS = ({setURL}) => {
    const searchLocation=(event)=>{
        event.preventDefault()//evita que se recarrge
        const Word=event.target.firstChild.value
        console.log(Word)
        console.log(`https://rickandmortyapi.com/api/location/${Word}`)
        setURL(`https://rickandmortyapi.com/api/location/${Word}`)
    }
  return (
    <form onSubmit={searchLocation}>
        <input type="text" />
        <button>Search</button>
    </form>
  )
}

export default InputS