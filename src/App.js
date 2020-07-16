import React from 'react'
import './App.css'
import { Catalogo } from './Components/Catalogo'
import { ProductosProvider } from './Components/Context'
import GlobalStyle from './Styles/Globalstyles'

function App() {
   
    return ( 
      <ProductosProvider>
        <GlobalStyle />
        <header className="App-header">
         <div>
          </div>
          <div>
            <Catalogo />
          </div>
        </header>
      </ProductosProvider>
  )}
export default App;
