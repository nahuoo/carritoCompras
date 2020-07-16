import React from 'react'
import styled from 'styled-components'

const Item = styled.article`
    background-color: white;
    flex-direction: row;
    max-width: 1100px;
    margin: 1% auto;
    color: black;
    border-radius: 2%;
    -webkit-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 30px -8px rgba(0,0,0,0.75);
  
    height: 50%;
    flex: 0 1 calc(25% - 1em);

    box-sizing:border-box;
    -moz-box-sizing:border-box; 
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;

    @media screen and (min-width: 40em) {
       max-width: calc(50% -  1em);
    }
 
    @media screen and (min-width: 60em) {
        max-width: calc(25% - 1em);
    }
`

const Imagen = styled.img`
    height: 50%;
    float: center;
`


export const Articulo = (props) =>{
        console.log(props.foto)
    return(
        <Item>
            <Imagen src={`http://18.228.4.19:1337${props.fotardas}`} alt='sin foto' />
            <h3>{props.titulo}</h3>
            <div>{props.descripcion}</div>
        </Item>
    )
}

