// eslint-disable-next-line no-unused-vars
import React from "react";
import LoginAdminLayout from "../Components/LoginAdminLayout";

// import { useState } from "react";

// const [Hide, setHide] = useState(true);

const LoginPages = () => (
  <LoginAdminLayout>
    <div className="w-2/3">
      <p className="font-semibold text-3xl text-start my-4">Log in</p>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          id="email"
          className=" border [#8E8E8E] text-gray-900 text-sm rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] h-9 px-2"
          placeholder="Email or Phone Number"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <input
          type="text"
          id="email"
          className=" border [#8E8E8E] text-gray-900 text-sm rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] h-9 px-2"
          placeholder="Password"
          required
        />
      </div>
      <div className="flex my-4 space justify-center items-center">
        <button className="bg-[#9B9B9B] w-1/5 rounded-md p-2 font-semibold text-white">
          <a href="/home">Login</a>
        </button>
        <a className="text-[#6268c6]" href="/createaccount">
          create account
        </a>
      </div>
    </div>
  </LoginAdminLayout>
);

export default LoginPages;
