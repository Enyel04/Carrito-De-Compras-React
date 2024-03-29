
//Realizando llamado de header
import Header from './components/header'
import Guitarra from './components/guitarra'
import { useState } from "react"



function App() {

  //State

  const [auth,setAuth]= useState()
  

  return (
    <>
  
      <Header/>
    
      {/* Recuerda que para llamar a un componente tiene que ser en mayuscula*/}
   

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
        <Guitarra/>
        <Guitarra/>
        <Guitarra/>
        <Guitarra/>
        <Guitarra/>
        <Guitarra/>
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    {/*   Aqui termina el html, y este comentario es jsx */}
    </>

  )

}

export default App
