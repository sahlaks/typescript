import type { ReactNode } from "react"

export type productProps = {
    title:string,
    price:number,
    inStock:boolean
    children:ReactNode
}

//import { Children, type ReactNode } from "react"

// interface productProps {
//     title:string,
//     price:number,
//     inStock:boolean,
//     children:ReactNode
// }


//export const Products = (props:productProps) => {
export const Products = ({title,price,inStock,children}:productProps) => {
    return (
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{inStock}</div>
            {children}
        </div>
    )
}