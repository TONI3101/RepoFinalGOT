import React from 'react'

const Search = ({setSearchPj}) => { // aqui el nombre 2º
    const handleFind = (event) => {
        setSearchPj(event.target.value.toLowerCase()) // nombre de la funcion 3º
    }
  return (

    <div className="divfilter">
        <input className="finder finder--char" onChange={handleFind} type="text" placeholder="🔍  Buscar Personaje..."/>
    </div>

  )
}

export default Search