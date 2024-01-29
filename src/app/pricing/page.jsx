// "use client";

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Pricing = () => {
    
//     const [prices , setPrices] = useState([]);

//     useEffect(() => {

//         fetchPrices()

//     },[])

//     const fetchPrices = async () => {
//         const {data} = await axios.get('/api/getProduct')
//         setPrices(data);
//         console.log(data);
//     }

//   return (
//     <div>
//     {prices && prices.map((price) => (
//         <ProductDisplay price={price} key={price.id} />
//     ))}
//     <div>Pricing</div>
//     </div>
//   )
// }

// export default Pricing