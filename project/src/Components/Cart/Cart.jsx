import React from 'react'
import product from '../../ProductArray'
function Cart() {
  return (
    <div>
      {
        product.map(x=>{
          return(
            <>
            <h1>{x.title}</h1>
            <img src={x.image1} alt="" />
            </>
          )
        })
      }
    </div>
  )
}

export default Cart
