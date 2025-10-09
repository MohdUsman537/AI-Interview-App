import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = form;
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError(null);

    try{
    }catch(error){
      if(error.response && error.reponse.data.message){
        setError(error.response.data.message);
      }else {
        setError("Something went Wrong. Try Again !")
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center mx-auto">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        {/* username */}
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="email">Email Address</label>
          <input
            id="email"
            value={form.email}
            onChange={({ target }) => setForm(f => ({ ...f, email: target.value }))}
            placeholder="example@gmail.com"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* password */}
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="password">Password</label>

          <input
            id="password"
            value={form.password}
            onChange={({ target }) => setForm(f => ({ ...f, password: target.value }))}
            placeholder="Min 8 Characters"
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Error */}
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        {/* Button */}
        <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Login
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{' '}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage("signup")}
            type="button"
          >
            SignUp
          </button>
        </p>


      </form>
    </div>
  );
};

export default Login;
