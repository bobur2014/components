import React from 'react';

const App = () => {
  return (
    <div className="font-sans text-gray-800">

   
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-500">Bella Onojie</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Faq</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>


      <section className="relative text-center bg-cover bg-center h-[550px]" style={{ backgroundImage: '' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Why stay hungry when you can order from Bella Onojie
          </h2>
          <p className="text-white mb-6">Download the bella onoje’s food app now on</p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full">Playstore</button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full">App store</button>
          </div>
        </div>
      </section>


      <div className="flex justify-center my-12">
        <img src="/phones.png" alt="App Phones" className="max-w-xs md:max-w-md" />
      </div>



      <section className="text-center py-12 px-4">
        <h3 className="text-2xl font-bold mb-12">How the app works</h3>

        <div className="flex flex-col gap-20 max-w-4xl mx-auto">

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src="/step1.png" alt="Create Account" className="max-w-xs" />
            <div className="text-left">
              <h4 className="text-orange-500 font-bold mb-2">Create an account</h4>
              <h5 className="text-xl font-semibold mb-2">Create/login to an existing account to get started</h5>
              <p>Explore all features and store your preferences easily.</p>
            </div>
          </div>

        
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img src="/step2.png" alt="Explore Menu" className="max-w-xs" />
            <div className="text-left">
              <h4 className="text-orange-500 font-bold mb-2">Explore varieties</h4>
              <h5 className="text-xl font-semibold mb-2">Shop for your favorite meals as e dey hot.</h5>
              <p>Browse the app to find your desired meals and add to cart.</p>
            </div>
          </div>

 
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src="/step3.png" alt="Checkout" className="max-w-xs" />
            <div className="text-left">
              <h4 className="text-orange-500 font-bold mb-2">Checkout</h4>
              <h5 className="text-xl font-semibold mb-2">When you're done, check out and get it delivered.</h5>
              <p>Quick and seamless checkout, then sit back and relax.</p>
            </div>
          </div>

        </div>
      </section>

      
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: 'url("/download-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-4">
          <h3 className="text-2xl font-bold mb-4">Download the app now</h3>
          <p className="mb-6">Available on your favorite store. Start your premium experience now</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full">Playstore</button>
        </div>
      </section>

    
      <footer className="text-center py-6 bg-gray-100">
        <h4 className="text-orange-500 font-bold text-xl">Bella Onojie</h4>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-5" /></a>
          <a href="#"><img src="/twitter.svg" alt="Twitter" className="w-5" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-5" /></a>
        </div>
        <p className="mt-4 text-sm text-gray-500">Copywright 2023 Bella Onojie.com</p>
      </footer>
    </div>
  );
};

export default App;
