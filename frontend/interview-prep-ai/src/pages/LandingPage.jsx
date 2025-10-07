import React, { useState } from 'react';
import heroImage from '../assets/hero-image.png';
import { APP_FEATURES } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {

    console.log("Get Started Clicked!");
  };

  return (
    <>
    <div className="w-full min-h-screen bg-[#FFFCEF] relative py-8 px-4">
      
      {/* /* Top right Login button * / */}
      <button
        className="absolute top-8 right-8 bg-gradient-to-r from-orange-400 to-amber-400 text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg z-20"
        onClick={() => setOpenAuthModal(true)}
      >
        Login / Sign Up
      </button>

      {/* /* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-10 pb-20 z-10">
        <div className="flex flex-col items-start w-full md:w-1/2 md:pr-16">
          <span className="bg-amber-100 text-amber-600 font-semibold px-4 py-2 rounded-xl mb-6 inline-flex items-center text-base shadow-sm">
            AI Powered
          </span>
          <h1 className="text-5xl font-bold text-black mb-8 leading-tight">
            Ace Interviews with<br />
            <span className="text-amber-500">AI-Powered</span> Learning
          </h1>
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2">
          <p className="text-lg text-black mb-8 max-w-xl">
            Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery — your ultimate interview toolkit is here.
          </p>
          <button
            className="bg-black text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-transform hover:scale-105 mb-10"
            onClick={handleCTA}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Dashboard/hero image preview */}
      <div className="max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-100 bg-gradient-to-br from-yellow-50/80 to-amber-50/70 mb-12">
        <img src={heroImage} alt="Interview Prep AI Dashboard Preview" className="w-full object-cover" />
      </div>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features That Make You Shine</h2>
        {/* First 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {APP_FEATURES.slice(0, 3).map(feature => (
            <div key={feature.id} className="bg-[#FFF8F8] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Remaining 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APP_FEATURES.slice(3).map(feature => (
            <div key={feature.id} className="bg-[#FFF8F8] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
        Made with <span className="text-red-500">❤️</span>. Happy Coding
      </div>
    </div>

    {/*Auth Model*/}
    <Modal
    isOpen={openAuthModal}
    onClose={() => {
      setOpenAuthModal(false);
      setCurrentPage("login");
    }}
    >
    
    <div>
      {currentPage === "login" && (<Login setCurrentPage={setCurrentPage}/>)}
      {currentPage === "signup" && (<SignUp setCurrentPage={setCurrentPage} />)}
    </div>

    </Modal>

  </>
  );
};

export default LandingPage;
