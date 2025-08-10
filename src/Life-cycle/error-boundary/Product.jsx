import React from 'react'

const Product = (props) => {
  let {product}=props  //Destructuring
  console.log(product);
  

  if (product=="TV"){
    throw new error("Product isn't Avaliable")
  }
  
  
  
    return (
    <div>
    <h2>Product: {product}</h2>  
    </div>
  )
}

export default Product
