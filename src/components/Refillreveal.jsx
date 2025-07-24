import React from 'react'

function Refillreveal() {
  return (
    <div className='bg-neutral-900 text-amber-50 min-h-screen p-8'>
      <div className='max-w-3xl mx-auto'>
      
        <h2 className='text-3xl font-extrabold mb-4'>Refill & Reveal</h2>
        <p className='text-lg mb-6'>
          Every great story deserves the perfect setting. Secure your spot and become part of the plot—whether it’s a cozy corner for one or a full table of suspects.
        </p>

       
        <form className='space-y-4'>
          <input 
            type='text' 
            placeholder='Your Name' 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200' 
          />
          <input 
            type='email' 
            placeholder='Your Email' 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200' 
          />
          <input 
            type='tel' 
            placeholder='Contact Number' 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200' 
          />
          <select 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50'>
            <option>Party Size</option>
            <option>Table for 1</option>
            <option>Table for 2-4</option>
            <option>Group Reservation (5+)</option>
          </select>
          <select 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50'>
            <option>Reservation Type</option>
            <option>Casual Coffee Visit</option>
            <option>Secret Mystery Tasting</option>
            <option>Themed Game Night</option>
          </select>
          <textarea 
            placeholder='Special Requests or Codewords' 
            rows='4' 
            className='w-full p-2 rounded bg-neutral-700 text-amber-50 placeholder-amber-200'>
          </textarea>
          <button 
            type='submit' 
            className='h-[50px] w-[180px] bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 text-white font-semibold  rounded-xl  hover:brightness-110"'>
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  )

  
}

export default Refillreveal