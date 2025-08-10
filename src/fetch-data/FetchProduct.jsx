import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const FetchProduct = () => {
     let [products,setProducts]=useState([])
 
async function getData() {
   //* 1st way

    //    let response=await axios.get("https://fakestoreapi.com/products")
    // console.log(data);
    // let {data}=response

    // @2nd way
            
        /**
         * Fetches product data from the Fake Store API.
         * @returns {Promise<Object>} The response data containing product information.
         * @throws {Error} If the request fails.
         */
        let {data}=await axios.get("https://fakestoreapi.com/products")   
        setProducts(data)
        // console.log(data);
    }

                
    useEffect(()=>{
                getData()
            },[])


    return (
        <>
        <h1>Fetch Product</h1>
        {
            products.map((value)=>(
                <Fragment key={value.id}>
                    <h2>{value.title}</h2>
                    <p>Price: {value.price}</p>
                </Fragment>
            ))
        }
        
        </>
    )
}
export default FetchProduct
