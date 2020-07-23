import React from 'react'
import { ProductosProvider } from './Components/Context'
import GlobalStyle from './Styles/Globalstyles'
import styled from 'styled-components'
import Tabs from './Components/Tabs'

const Appheader = styled.header`
  background-color: #d1d5db;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
   
    return ( 
      <ProductosProvider>
        <GlobalStyle />
        <Appheader>
        <Tabs />                 
        </Appheader>     
      </ProductosProvider>
  )}
export default App;
