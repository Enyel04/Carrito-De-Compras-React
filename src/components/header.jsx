import { useMemo } from "react";

export default function Header({cart,removeFromCart,incrementarCantidad,descrementarCantidad,clearCart}) {


    //State derivado

    const isEmpty= useMemo(() => cart.length===0, [cart] ) //Lee si hay elementos en el carrito, de base sera 0
    const cartTotal=useMemo(() => cart.reduce((total,item)=> total +(item.cantidad*item.price),0),[cart]) //Calculara la cantidad de guitarras (items) en el carrito y los multiplicara por el precio, luego se suma el total
    return(
             
    <>
    {/* En react habra que crear los fragments para poder agregar varias etiquetas html en un return, solo es necesario 
        si se llamara varias etiquetas con un return con varios valores o se pasan vacios 
        esta la opcion*     <Fragment> </Fragment>, pero habra que importarlo o esta la opcion de solo abrir <> </> y cerrarlo */}
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            
                            {isEmpty ?(
                                <p className="text-center">El carrito esta vacio</p>
                            ):(

                            <>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(guitarra => (
                                        
                                
                                        <tr>
                                            <td>
                                                <img className="img-fluid" src={`/img/${guitarra.image}.jpg`} alt="`imagen` guitarra" />
                                            </td>
                                            <td>{guitarra.name}</td>
                                            <td className="fw-bold">
                                                    ${guitarra.price}
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() =>descrementarCantidad(guitarra.id) }
                                                      
                                                   
                                                >
                                                    -
                                                </button>
                                                    {guitarra.cantidad}
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() =>incrementarCantidad(guitarra.id) }
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={()=>removeFromCart(guitarra.id)}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                        )) } {/* Final de cart.map */}
                                    </tbody>
                                
                                </table>
                                

                                <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            </>
                            )} {/* Final de Operador Ternario de si carrito esta vacio*/}
                            <button 
                            className="btn btn-dark w-100 mt-3 p-2"
                            onClick={clearCart}
                            >Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>       


    </>
    )
}


