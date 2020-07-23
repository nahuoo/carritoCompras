import React, { useContext } from 'react'
import styled from 'styled-components'
import  {ContextProductos } from './Context'
import { Spinner } from './Spinner'
import {Equipos} from './Equipos'


const Fondo = styled.div`
    background-color: white;
    display: flex;
    margin: 0%;
    height: auto;
    width: 90vw;
    border-radius: .5%;
    -webkit-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`
 

export const Catalogo = () => {

    const { productosLista, isFetching } = useContext(ContextProductos)

if ( isFetching ) { return(<div><Spinner /></div>) }
        return (
                <Fondo>                    
                  {productosLista.map((equipo) => (       
                  <Equipos key={equipo.id} productos={equipo.productos} nombre={equipo.nombre} foto={equipo.foto.url} />
                  ))}                   
                </Fondo>       
        )      
} 
    
