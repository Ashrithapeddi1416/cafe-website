import React from 'react';

function Herosection() {
  return (
    <div className="bg-neutral-900 text-center text-amber-50 px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Sip into the mystery—where{' '}
        <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 bg-clip-text text-transparent">
          coffee
        </span>{' '}
        meets crime.
      </h1>

      <p className="text-xl sm:text-2xl md:text-3xl mt-5">
        “One cup. One clue. One chance.”
      </p>

      <button className="mt-8 h-[50px] w-[200px] text-lg sm:text-xl bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 text-white font-semibold rounded-xl hover:brightness-110 transition duration-300">
        Enter the Brew Zone
      </button>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center border-amber-400 border-2 rounded-3xl p-6 sm:p-8">
        {[
          'https://i.ytimg.com/vi/VhbID9DZns8/maxresdefault.jpg',
          'https://i.ytimg.com/vi/pV_uptrUo8k/maxresdefault.jpg',
          'https://detectiveforaday.com/cdn/shop/files/1_min_min.jpg?v=1651312913&width=300',
          'https://detectivemysterymasters.com/cdn/shop/files/virginia-1982-mystery-case-3-3_3d64e98d-945a-45d2-b9db-d22f537b71b2_740x.webp?v=1723156639',
        ].map((url, index) => (
          <div
            key={index}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl shadow-lg bg-cover bg-center border-2 border-orange-400"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        ))}
      </div>

      <div className="text-lg sm:text-xl md:text-2xl mt-6 p-4 sm:p-6">
        “Thanks for sipping, sleuthing, and solving with us. A new case file drops soon—and trust us, it's not one to miss. Keep your mugs full and your minds sharp.”<br />
        — From the mystery makers at <strong>Crimes & Cappuccinos</strong>
      </div>
    </div>
  );
}

export default Herosection;