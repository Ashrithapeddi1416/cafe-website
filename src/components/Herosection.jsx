import React from 'react'

function Herosection() {
  return (
    <div className='bg-neutral-900 text-5xl text-center text-amber-50 py-10'>
      Sip into the mystery—where{' '}
      <span className='bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 bg-clip-text text-transparent'>
        coffee
      </span>{' '}
      meets crime.
      <p className='text-3xl mt-5 text-center' >
        “One cup. One clue. One chance.”
     </p>
     <button className="mt-8 h-[50px]  text-xl w-[200px] bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 text-white font-semibold  rounded-xl  hover:brightness-110">
  Enter the Brew Zone
</button>
<div className="mt-20 ml-20 mr-20 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center border-amber-400 border-2 rounded-3xl p-8">
  <div className=" border-2 border-orange-400 rounded-3xl h-[500px] w-[500px] bg-cover bg-center  shadow-lg" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/VhbID9DZns8/maxresdefault.jpg)' }}></div>
   <div className="border-2 border-orange-400 rounded-3xl h-[500px] w-[500px] bg-cover bg-center  shadow-lg" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/pV_uptrUo8k/maxresdefault.jpg)' }}></div>
  <div className="h-[500px] border-orange-400 w-[500px] bg-cover bg-center border-2 rounded-3xl shadow-lg" style={{ backgroundImage: 'url(https://detectiveforaday.com/cdn/shop/files/1_min_min.jpg?v=1651312913&width=300)' }}></div>
  <div className="h-[500px] border-orange-400 w-[500px] bg-cover bg-center border-2 rounded-3xl shadow-lg" style={{ backgroundImage: 'url(https://detectivemysterymasters.com/cdn/shop/files/virginia-1982-mystery-case-3-3_3d64e98d-945a-45d2-b9db-d22f537b71b2_740x.webp?v=1723156639)' }}></div>
</div>
<div className='text-2xl text-center mt-6 p-6'>“Thanks for sipping, sleuthing, and solving with us. A new case file drops soon—and trust us, it's not one to miss. Keep your mugs full and your minds sharp.”
— From the mystery makers at Crimes & Cappuccinos
</div>
    </div>
  )
}

export default Herosection