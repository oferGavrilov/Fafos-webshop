import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

export default function Purchase () {
      console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      return (
            <section className='h-screen'>
                  <h2>Purchase Page</h2>
            </section>
      )
}
