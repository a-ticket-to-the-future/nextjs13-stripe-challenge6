"use client"

import { usePrices } from '@/app/pricing/page';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

// const {prices} = usePrices();

const ProductDisplay = () => {
    const [prices , setPrices] = useState([]);

    const handlePrices = async (e) => {
        e.preventDefault()



    


        // useEffect(() => {

        //     fetchPrices()
    
        // },[])
    

    const fetchPrices = async () => {
        const {data} = await axios.get('/api/getProduct')
        setPrices(data);
        console.log(data);

    }

    

    
    
    

}
// console.log(prices);


    const handleSubscription = async (e) => {
        
        e.preventDefault();

    


        const {data} = await axios.post('/api/subscription',{
            priceId:prices.id
        },
        {
            headers:{
                "Content-Type" : "application/json",
            },
        }
        );
        window.location.assign(data);
    }

  return (
    <div className=' border-2 border-yellow-300 w-[600px] h-[480px] ml-[100px] my-2'>
        <div className=''>
            {/* <div>{{prices}}</div> */}
            {/* <div>

            {prices && prices.map((price) => (
                <Home price={price} key={price.id} />
            ))}
            </div> */}



<div>
            <form 
                // action="/create-checkout-session"
                // method="POST"
                // type="submit"
                onSubmit={handlePrices}
                >
            <input type='hidden' name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
            <button id="checkout-and-portal-button"
                    type="submit"
                    
                    className=' border-2 border-green-600 bg-green-400 rounded-lg w-[150px] h-[50px] hover:scale-110 active:scale-95 mt-[100px]'
                    onClick={handlePrices}
                    >
              Prices
            </button>
          </form>
            </div>
            
         <div>
         <form 
                // action="/create-checkout-session"
                // method="POST"
                // type="submit"
                onSubmit={handleSubscription}
                >
            {/* <input type='hidden' name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" /> */}
            <button id="checkout-and-portal-button"
                    // type="submit"
                    
                    className=' border-2 border-purple-700 bg-purple-600 rounded-lg w-[150px] h-[50px] hover:scale-110 active:scale-95 mt-[100px]'
                    onClick={handleSubscription}
                    >
              Checkout
            </button>
          </form>
         </div>
          
        </div>
      </div>
  )
}

export default ProductDisplay