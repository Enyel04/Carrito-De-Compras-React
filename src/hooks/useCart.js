import { useState, useEffect } from "react"

import { db } from "../data/db"

export const useCart=() => {
  
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
    
    
    

    return{
       data,
       cart,
       addTocart,
       removeFromCart,
       incrementarCantidad,
       descrementarCantidad,
       clearCart
    }
}

