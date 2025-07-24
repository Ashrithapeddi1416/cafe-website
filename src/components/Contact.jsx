import React from 'react'

function Contact() {
  return (
    <div className='bg-neutral-800 text-amber-50 min-h-screen p-8'>
      <div className='max-w-3xl mx-auto'>
     
        <h2 className='text-3xl font-extrabold mb-4'> Contact Us</h2>
        <p className='text-xl mb-6'>
          We love a good mystery—and even more, we love hearing from fellow curious minds.
          Whether you’ve cracked a case, want to book a table, have feedback on our brews, 
          or just need help choosing the perfect latte to pair with your plot twist—we’re all ears (and espresso)!
        </p>

      
        <h2 className='text-2xl font-extrabold mt-8'> Our Location</h2>
        <p className='text-xl mb-6'>
          Crimes & Cappuccinos<br />
          Bajaj Nagar, Nagpur, Maharashtra<br />
          India
        </p>

        <h2 className='text-2xl font-extrabold mt-8'> Reach Out</h2>
        <p className='text-xl mb-2'>Phone: +91 98989 89898</p>
        <p className='text-xl mb-6'>Email: mystery@crimescappuccinos.com</p>

       
        <h2 className='text-2xl font-extrabold mt-8'> Send Us a Message</h2>
        <form className='mt-4 space-y-4'>
          <input type='text' placeholder='Your Name' className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200' />
          <input type='email' placeholder='Your Email' className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200' />
          <textarea placeholder='Your Message' rows='4' className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200'></textarea>
          <button type='submit' className= "bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 text-white font-semibold    hover:brightness-110 px-4 py-2 rounded-xl ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact