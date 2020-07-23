import React, { useEffect, useState, createContext } from 'react'

export const ContextProductos = createContext()

export const ProductosProvider = (props) => {

     const [productosLista, setProductosLista] = useState('')
     const [isFetching, setIsFetching] = useState(true)
     const [filtro, setFiltro ] = useState([])
     const [indiceTabs, setIndiceTabs] = useState(0);
     const [equipoNombre, setEquipoNombre] = useState(0);

     useEffect(() => {
          fetch('http://18.228.4.19:1337/equipos')
          .then(res => res.json())
          .then(data => {
              setProductosLista(data)
              setIsFetching(false)
               })
          },[])
     const value = {
          productosLista,
          isFetching,
          filtro,
          setFiltro,
          indiceTabs,
          setIndiceTabs,
          equipoNombre,
          setEquipoNombre
     }
             return(
                  <ContextProductos.Provider value={value} >
                       {props.children}
                  </ContextProductos.Provider>
             )
}


