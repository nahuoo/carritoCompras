import React, { useEffect, useState, createContext } from 'react'

export const ContextProductos = createContext()

export const ProductosProvider = (props) => {

     const [productosLista, setProductosLista] = useState('')
     const [isFetching, setIsFetching] = useState(true)
     
     useEffect(() => {
          fetch('http://18.228.4.19:1337/productos')
          .then(res => res.json())
          .then(data => {
              setProductosLista(data)
              setIsFetching(false)
              console.log(data)
               })
          },[])
          console.log(productosLista)
     const value = {
          productosLista,
          isFetching,
     }
             return(
                  <ContextProductos.Provider value={value} >
                       {props.children}
                  </ContextProductos.Provider>
             )
}


