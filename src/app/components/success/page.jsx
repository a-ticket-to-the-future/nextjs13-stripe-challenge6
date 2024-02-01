"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Stripe from 'stripe'



const success = () => {
  
  const [session_id , setSession_id] = useState("");
  
  // useEffect(() => {
  
  //   const query = new URLSearchParams(window.location.search);
  //   console.log(query);

  //   const sessionId = query.get('session_id');
  //   console.log(sessionId);
  
  //    setSession_id(sessionId);
  
  // },[]);
  
  const handleBillingPortal = async (e) => {
    e.preventDefault();

    // await setSession_id()

    const query = new URLSearchParams(window.location.search);
    // console.log(query);

    const sessionId = query.get('session_id');
    // console.log(sessionId);
    


    //  billingPortal(sessionId, {
    //   onSuccess: ({ url }) => {
    //     // カスタマーポータルに遷移
    //     window.location.href = url;
    //   },
    //   onError: (error) => {
    //     console.log(error);
    //     toast({
    //       title: "決済内容の確認に失敗しました",
    //       description: "お手数おかけしますが、お問い合わせください",
    //       variant: "destructive",
    //     });
    //   },
    // });
    console.log(sessionId);

    try{
      const response = await axios.post('/api/billingPortal',{
      session_id : sessionId,
      });
      
      console.log(response);
      const {url} = response.data;
      if(url){
        window.location.href = url;
      } else {
        console.log("urlが取得できませんでした")
      }
    } catch(error) {
      console.log(error);
    }
    

    // billingPortal(undefined, {
    //   onSuccess: ({ url }) => {
    //     // カスタマーポータルに遷移
    //     window.location.href = url
    //   },

    //   onError: (error) => {
    //     console.log(error)
    //     toast({
    //       title: "決済内容の確認に失敗しました",
    //       description: "お手数おかけしますが、お問い合わせください",
    //       variant: "destructive",
    //     })
    //   },
    // })

    // return response.data

  }

  // const handleBillingPortal = async () => {
    
  // }

  console.log(session_id);
  // console.log(response)


  return (
    <section>
      <div 
      // class="product Box-root"
      >
        <div 
        // class="description Box-root"
        >
          <h3>スタータープランに加入しました！</h3>
        </div>
      </div>
      <form 
            // action="/create-portal-session" 
            // method="POST"
            onSubmit={handleBillingPortal}
            >
        <input type="hidden" id="session-id" name="session_id" value={session_id} />
        <button id="checkout-portal-button"
                type="submit"
                // onClick={handleBillingPortal}
                >
          領収書を確認する
        </button>
      </form>
    </section>
  )
}

export default success