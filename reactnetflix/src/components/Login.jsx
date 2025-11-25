import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
 
    const [islogin,setIsLogin]=useState(false);
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const loginHandler=()=>{
        setIsLogin(!islogin);
    }

    const getInputData=(e)=>{
       e.preventDefault();
       setFullName("");
       setEmail("");
       setPassword("");
       console.log(fullName,email,password)   

    }


  return (
    <div className="w-full">
      <Header />
      <div>
        <img
          className="w-[100%] h-[100vh]"
          src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
          alt="banner"
        />
      </div>

      <form onSubmit={getInputData} className="  flex flex-col p-12 left-0 right-0 my-6 rounded-md w-3/12 mx-auto absolute top-11 bg-black opacity-80">
        <h1 className="text-3xl text-white mb-5 font-bold">{islogin ? "Login":"Sign Up"}</h1>

        <div className="flex flex-col gap-3 p-4 rounded-lg w-full">
         
         {
            !islogin &&    <input value={fullName}
            type="text"
            onChange={(e)=> setFullName(e.target.value )}
            placeholder="Enter your name"
            className="outline-none p-3 my-2 rounded-md bg-gray-800"
          />
         }
          

       

          <input
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="outline-none p-3 rounded-md bg-gray-800"
          />

          <input
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="outline-none p-3 rounded-md bg-gray-800"
          />
          <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium ">{islogin ? "Login":"Sign Up"}</button>


          <p className="text-white ">{islogin ? "New to Netflix?":"Already Have an Account?"}
            <span onClick={loginHandler} className="ml-1 text-blue-900 font-medium">{islogin ? "Sign up":"Login"}</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
