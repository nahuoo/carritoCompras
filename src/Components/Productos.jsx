import React, { useContext } from 'react'
import styled from 'styled-components'
import { Articulo } from './Articulo'
import  {ContextProductos } from './Context'
import { Spinner } from './Spinner'
import Typography from '@material-ui/core/Typography'


const Fondo = styled.div`
    background-color: white;
    display: flex;
    margin: 0%;
    height: auto;
    color: black;
    width: 90vw;
    border-radius: .5%;
    -webkit-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    justify-content: space-evenly;
    flex-wrap: wrap;
`



export const Productos = (props) => {
    const { isFetching, filtro, equipoNombre } = useContext(ContextProductos)



if ( isFetching ) { return(<div><Spinner /></div>) }
        return (
                <>
                <Fondo> 
                    <Typography variant="head" color="textPrimary" component="p">
                        {equipoNombre}                      
                    </Typography>
                </Fondo>
                <Fondo>
                    {filtro.map( producto => (<Articulo foto={producto.fotourl} descripcion={producto.descripcion} titulo={producto.titulo} key={producto.id} />))}
                </Fondo>   
                </>    
        ) 
} 
    
