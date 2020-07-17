import React from 'react'
import { Catalogo } from './Components/Catalogo'
import { ProductosProvider } from './Components/Context'
import GlobalStyle from './Styles/Globalstyles'
import styled from 'styled-components'

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
            <Catalogo />
          
        </Appheader>
        
      </ProductosProvider>
  )}
export default App;
