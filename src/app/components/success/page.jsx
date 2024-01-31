import React from 'react'
import Stripe from 'stripe'


const success = () => {
  return (
    <section>
      <div class="product Box-root">
        <div class="description Box-root">
          <h3>スタータープランに加入しました！</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input type="hidden" id="session-id" name="session_id" value="" />
        <button id="checkout-and-portal-button" type="submit">
          領収書を確認する
        </button>
      </form>
    </section>
  )
}

export default success