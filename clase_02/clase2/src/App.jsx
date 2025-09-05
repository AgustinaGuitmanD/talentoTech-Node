import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import ListaEstudiantes from './components/ListaEstudiantes'

function App() {
  

  return (
    <div>
      <h1> Boton </h1>
      <Boton></Boton>
      <ListaEstudiantes nombre = "Pedro Perez" edad= "23"/>
      <ListaEstudiantes nombre="Juana Juanez" edad="34" />
      <ListaEstudiantes nombre="María Mariez" edad= "26" />
    </div>
  
  )
}

export default App
