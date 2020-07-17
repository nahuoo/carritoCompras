import React, { useContext } from 'react'
import styled from 'styled-components'
import { Articulo } from './Articulo'
import { BotonEquipos } from './BotonEquipos'
import  {ContextProductos} from './Context'

const Fondo = styled.div`
    background-color: white;
    display: flex;
    margin: 0%;
    height: 90vh;
    width: 90vw;
    border-radius: 2%;
    -webkit-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    justify-content: space-between;
    flex-wrap: wrap;
    
`
 

export const Catalogo = () => {

    const { productosLista, isFetching, filtro, setFiltro } = useContext(ContextProductos)
    const handleClick = () => {
        setFiltro(productosLista.map( equipo => equipo.productos[0]))
    }
    
if ( isFetching ) { return(<div>cargando...</div>) }
        return (
            <>
                <Fondo> 
                    <button onClick={handleClick} />
                    {productosLista.map( equipo => (<BotonEquipos productos={equipo.productos} titulo={equipo.nombre} foto={equipo.foto.url} />))}
                    {filtro.map( producto => (<Articulo foto={producto.fotourl} descripcion={producto.descripcion} titulo={producto.titulo} key={producto.id} />))}
                </Fondo>
                
            </>
        )
     
   
} 
    
