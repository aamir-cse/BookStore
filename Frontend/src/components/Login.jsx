import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
//Above line is for validation purpose

function Login() {
  // for validation purpose "useForm " is defined
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  

  return (
    <>
      <div>
        {/* Copy paste Modal from Daisy UI and componenet name is "MODAL" */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById("my_modal_3").close()}
                  >
                    ✕
                  </Link>
                
                <h3 className="font-bold text-lg">Login</h3>
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
                {/* Password Input Field */}
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password "
                    className="w-80 px-3 py-1 border rounded-md outline-none space-y-1"
                    {...register("password", { required: true })}
                  />
                  <br/>
                  {/* errors will return when field validation fails  */}
                  {errors.password && <span className="text-sm text-red-700">This field is required</span>}
                </div>
                {/* Login Field */}
                <div className="flex justify-around mt-4">
                  <button className="bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Login
                  </button>
                  <p>
                    Not registerd ?{" "}
                    <Link
                      to="/SignUp"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
