import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic,setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Signup Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setError("Please fill out all required fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError(null);

    // Registration logic or API call here
    navigate("/dashboard"); // Change destination as needed
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center mx-auto">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mb-6">
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>


        {/* Full Name Field */}
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder="John"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="email">Email Address</label>
          <input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="john@example.com"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Min 8 Characters"
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}

        {/* Signup Button */}
        <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-4">
          Sign Up
        </button>

        {/* Switch to Login */}
        <p className="text-[13px] text-slate-800 mt-3">
          Already an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage("login")}
            type="button"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
