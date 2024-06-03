import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
//Above line is for validation purpose

function ContactUs() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
      
  return (
    <>
      <div className="flex h-screen   justify-center items-center">
         <div className=" modal-box border-2 shadow-md border-sky-500 p-3 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}  method="modal">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
            
            <h3 className="font-bold text-lg text-green-700">Contact Us</h3>
            {/* Name Input Field */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name "
                className="w-80 px-3 border py-1 rounded-md outline-none space-y-1"
              // Below line is for validation
              {...register("name", { required: true })}
              />
              <br/>
              {/* errors will return when field validation fails  */}
              {errors.name && <span className="text-sm text-red-700">This field is required</span>}

              

            </div>
            {/* Email Input Field */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email "
                className="w-80 px-3 border py-1 rounded-md outline-none space-y-1"
                // Below line is for validation
              {...register("email", { required: true })}
              />
              <br/>
              {/* errors will return when field validation fails  */}
              {errors.email && <span className="text-sm text-red-700">This field is required</span>}

            </div>

             {/* Message Input Field */}
             <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea className="w-80 px-3 border py-1 rounded-md outline-none space-y-1" name="paragraph_text" placeholder='Enter your Message' cols="50" rows="7"></textarea>
              
            </div>
            
            {/* Submit field Field */}
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
              
            </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default ContactUs