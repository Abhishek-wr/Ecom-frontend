import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Shared/InputField";

import { FaUserPlus } from "react-icons/fa6";
import { registerNewUser } from "../../store/Action";
import Spinners from "../Shared/Spinners";
const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false);
  const {
      register,
      handleSubmit,
      formState:{errors},
      reset,
  } = useForm({
      mode:"onTouched"
  })
  const registerHandler = async (data) =>{
      console.log("register Clicked");
      dispatch(registerNewUser(data,toast,reset,navigate,setLoader));
  }
  return(
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
          <form onSubmit={handleSubmit(registerHandler)}
          className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
              <div className="flex flex-col items-center justify-center space-y-4">
                  <FaUserPlus  className="text-slate-800 text-5xl"/>
                  <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl">Register Here</h1>
              </div>
          
              <hr className="mt-2 mb-5 text-black"/>
              <div className="flex flex-col gap-3">
                  <InputField
                      label="UserName"
                      required
                      id="username"
                      type="text"
                      message="UserName is Required"
                      placeholder="Enter your UserName"
                      register={register}
                      errors={errors}

                  />
                  <InputField
                      label="Email"
                      required
                      id="email"
                      type="email"
                      message="Email is Required"
                      placeholder="Enter your Email"
                      register={register}
                      errors={errors}

                  />
                    <InputField
                      label="Password"
                      required
                      id="password"
                      type="password"
                      message="Password is Required"
                      placeholder="Enter your Password"
                      register={register}
                      errors={errors}
                      min = {6}

                  />
              </div>
              <button
                  disabled={loader}
                  className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                  type ="submit">
                  {loader ? (
                      <>
                        <Spinners/> Loading...</>
                      
                  ) : <>Register</>}
                  
              </button>
              <p className="text-center text-sm text-slate-700 mt-6 mr-2">Already have an Account?  
              <Link className="font-semibold underlin hover:text-black text-center"
                      to="/login">
              <span > Login</span>
              </Link>
              </p>
          </form>
      </div>
  )
}

export default Register
