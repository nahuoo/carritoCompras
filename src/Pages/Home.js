import React from 'react'
import { ProductosProvider } from '../Components/Context'
import GlobalStyle from '../Styles/Globalstyles'
import {Shop} from './Shop'
function Home() {
  
    return ( 

      <ProductosProvider>
        <GlobalStyle />
        <Shop />
      </ProductosProvider>
  )}
export default Home
