import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'



function App() {

  const enlaces = [
            "Remeras",
            "Calzados",
            "Accesorios",
            "Contacto"
  ]

  const texto = "¡¡DESCUENTOS DE HASTA UN %40%!!"


  return (
    <>
      <Navbar links={enlaces}/>
      <ItemListContainer greeting={texto}/>
   
    </>
  )
}

export default App
