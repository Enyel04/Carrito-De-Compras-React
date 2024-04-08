export type Guitarra = {
    id:number
    name:string
    image:string
    description:string
    price:number
}
// Guitarra & esta heredando
//Si quiero hereador Items en especifico es asi
//Pick<Guitarra, "id" | "name"| "price"> &{
// cantidad} , hereadaras en especifico
//Omit, quitara lo que no quieres que herede

export type CartItem = Guitarra &{
    
    cantidad:number
}


