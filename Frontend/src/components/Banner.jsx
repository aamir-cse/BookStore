import React from 'react'
import img from '/LibraryGirl.jpg';


// Seconde part of here section in which we show some heading and image at left side
function Banner() {
  return (
    <>
        <div className="max-w-screen-2xl container my-10 mx-auto px-4 md:px-20 mt-10 flex flex-col md:flex-row">
            {/* Left part */}
            <div className="w-full md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-12">
                    {/* Left corner heading */}
                <h1 className="text-4xl font-extrabold">Hello , Welcomes here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
                     {/* Left corner paragraph */}
                <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto eius corporis, porro aperiam eligendi illo exercitationem repellendus molestias provident amet.</p>
                
                     {/* input email box */}
               <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>

               
                
                </div>
                 {/* Get started button */}
                 <button className="btn btn-secondary mt-4">Get Started</button>
                
                
            </div>
            

             {/* Right part */}
            <div className="w-full md:w-1/2  ">
                {/* top left image */}
                <img className="rounded-full mt-14 h-100 w-100 bg-white --tw-bg-opacity: 1" src={img} alt="" />
            </div>
            
        </div>
    </>
  )
}

export default Banner