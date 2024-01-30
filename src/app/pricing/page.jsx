// "use client";

// import axios from 'axios';
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import ProductDisplay from '../components/ProductDisplay/page';




// const Pricing = () => {
    
//     const [prices , setPrices] = useState([]);
    
//     // const PriceContext = createContext({
//     //     prices,
//     // })


//     const handlePrices = async (e) => {


//     useEffect(() => {

//         fetchPrices()

//     },[])

//     const fetchPrices = async () => {
//         const {data} = await axios.get('/api/getProducts')
//         setPrices(data);
//         console.log(data);
//     }

//     }

    
    
    

//   return (
//     <div>
    
//     <div>
//             <form 
//                 // action="/create-checkout-session"
//                 // method="POST"
//                 // type="submit"
//                 onSubmit={handlePrices}
//                 >
//             <input type='hidden' name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
//             <button id="checkout-and-portal-button"
//                     type="submit"
                    
//                     className=' border-2 border-green-600 bg-green-400 rounded-lg w-[150px] h-[50px] hover:scale-110 active:scale-95 mt-[100px]'
//                     onClick={handlePrices}
//                     >
//               Prices
//             </button>
//           </form>
//             </div>
    
    
//     {/* <div>
//     {prices && prices.map((price) => (
//         <ProductDisplay price={price} key={price.id} />
//     ))}
//     <div>Pricing</div>
//     </div> */}

    

//     {/* <div>
//         <PriceContext.Provider value={{prices}}>
//             <ProductDisplay />
//         </PriceContext.Provider>
//     </div> */}

//     </div>
//   )
// }

// export default Pricing


