import React from 'react'
import styled from 'styled-components'
import Tabs from '../Components/Shop/Tabs'
import {CarritoCompras} from '../Components/Shop/Carrito'
import Drawer from '../Components/Shop/Drawer'

const Appheader = styled.header`
  background-color: #d1d5db;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Shop = () => {
    return(
        <>
        <Appheader>
         <Tabs />                 
        </Appheader>
        <CarritoCompras />     
        <Drawer />
        </>
    )
}