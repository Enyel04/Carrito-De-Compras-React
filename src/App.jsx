
//Realizando llamado de header
import { useState, useEffect } from "react"
import Header from './components/header'
import Guitarra from './components/guitarra'

import { db } from './data/db'


  //State, los Hooks tienen que estar en la parte superior y no se puede cambiar su valor
  //Effect si deja de hacer esto


function App() {

  const carritoInicial=() => {
    const localStorageCart=localStorage.getItem("cart")
    return localStorageCart? JSON.parse(localStorageCart): []
  }
  const [data]= useState(db)
  const [cart,setCart]= useState(carritoInicial)

  const MAX_ITEMS=5 //maximo de elementos en el carrito
  const MIN_ITEMS=1 //minimo de elementos en el carrito

  useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cart)) //para guardar elementos en el localStorage
  },[cart])
  

  function addTocart(item) {

  const itemExists= cart.findIndex((guitarra) => guitarra.id===item.id)

  if (itemExists>=0 ) { //Existe en el carrito

    const updateCart = [...cart]
    if (item.cantidad<MAX_ITEMS) {
      updateCart[itemExists].cantidad++ //Actualiza el carrito y lo existente para luevo sumarlo
      
    }
    setCart(updateCart) //Actualiza la funcion del carrito
    
  }
  else{
    item.cantidad=1 //procede a crear una copia exacta para irlos agregando y empezara con 1
    setCart([...cart,item]) //Crea una copia del carrito
  }



}

function removeFromCart(id) {

  setCart((prevCart) =>prevCart.filter (guitarra=>guitarra.id !==id)) //Agregando setcart para eliminar carrito de compra, pasa id de guitarra para proceder a eliminarlo
}

function incrementarCantidad(id) {

    const updateCart=cart.map(item=>{
      if (item.id===id && item.cantidad < MAX_ITEMS) {
        return {
          ...item,
          cantidad:item.cantidad+1
        }
      }
      return item
    })
    setCart(updateCart)

}
function descrementarCantidad(id) {
  const updateCart=cart.map(item=>{
    if (item.id===id && item.cantidad > MIN_ITEMS) {
      return {
        ...item,
        cantidad:item.cantidad-1
      }
    }
    return item
  })
  setCart(updateCart)
 
}

function clearCart() {
  setCart([])
}



  

  return (
    <>
  
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementarCantidad={incrementarCantidad}
        descrementarCantidad={descrementarCantidad}
        clearCart={clearCart}
      />
    
      {/* Recuerda que para llamar a un componente tiene que ser en mayuscula*/}
   

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => {

            return(<Guitarra
                key={guitarra.id}
                guitarra={guitarra}
          
                setCart={setCart}
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
