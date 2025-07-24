import React from 'react'

function About() {
  return (
    <div className='bg-neutral-700 text-amber-50 min-h-screen p-4 sm:p-6'>
      <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-6'>
        
        <div
          className='w-full sm:w-[350px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] mt-6 lg:mt-16 lg:ml-16 rounded-2xl bg-cover bg-center'
          style={{ backgroundImage: 'url(/logo.png)' }}
        ></div>

        <div className='w-full max-w-md px-4 text-center lg:text-left'>
          <p className='text-base sm:text-lg lg:text-xl'>
            <strong>At Crimes & Cappuccinos</strong>, every cup comes with a twist.
            We’re the café where cozy meets curious—where you don’t just sip your latte, you solve a mystery. 
            Grab your crew, pick a printed case file, and dive into stories that stir the mind while the coffee warms the soul. 
            Whether you’re a seasoned sleuth or just here for the vibes, our space is brewed for discovery, laughter, and the occasional plot twist. 
            <br /><br />
            Coffee, clues, and good company—that’s our daily brew.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About