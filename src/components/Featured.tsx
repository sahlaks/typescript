import React from 'react'
import type { productProps } from './Products'

type featuredProps = productProps &{
    rating:number
}
// interface props {
//     title:string,
//     price:number,
//     inStock:boolean,
//     rating:number
// }

// interface ProductProps {
//   id: string;
//   name: string;
//   price: number;
// }

// interface FeaturedProps extends ProductProps {
//   rating: number;
// }

function Featured(props:featuredProps) {
  return (
    <div>
        <div>{props.title}</div>
            <div>{props.price}</div>
            <div>{props.inStock}</div>
            <div>{props.rating}</div>
            {props.children}
    </div>
  )
}

export default Featured