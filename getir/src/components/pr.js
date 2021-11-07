import React from 'react'
import productData from 'api/product.json'
import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from "components/Header";
import Campaigns from "components/Campaigns";
import cartData from 'api/cart.json';
import { data } from 'autoprefixer';


export function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        setProduct(productData)
    }, [])



    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(cartData)
    }, [])

    const handleClick = (cartData) => {
        console.log(cartData)
        // fetch(cartData)
        // .then(res=>res.json)
        // .then(result=>setCart(result.hits))
        // .catch(err=> console.log("error"))
    }
    return (
      
           

            <div className="bg-white">
                <Header />
           <div className="container mx-auto">
               <h3 className="text-sm font-semibold mb-3"></h3>
               
            <Campaigns />
               <div className="flex flex-col">
             {product.map((product, i)=>{
                 
                return(
                    <button key={i} onClick={()=> handleClick(cartData)} className="flex flex-row items-center">
                         <img src={product.image} alt = {product.title} className="w-12 h-12 rounded border border-gray-200 flex flex-col" />
                        <span>{product.title}</span>
                    </button>
                    
                )
                
                
            }
            
            )} 
             </div>
           </div>
        </div>
    )
}
