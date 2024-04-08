
//Realizando llamado de header

import Header from './components/header'
import Guitarra from './components/guitarra'


import { useCart } from "./hooks/useCart"


  //State, los Hooks tienen que estar en la parte superior y no se puede cambiar su valor
  //Effect si deja de hacer esto


function App() {

  const { data,cart,addTocart,removeFromCart,incrementarCantidad,descrementarCantidad,clearCart,isEmpty,cartTotal}=useCart()


  
  

  return (
    <>
  
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementarCantidad={incrementarCantidad}
        descrementarCantidad={descrementarCantidad}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={carTotal}
      />
    
      {/* Recuerda que para llamar a un componente tiene que ser en mayuscula*/}
   

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => {

            return(<Guitarra
                key={guitarra.id}
                guitarra={guitarra}
          
          
                addTocart={addTocart}
            />)
          })}
   
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
