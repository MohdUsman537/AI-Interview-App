import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Content */}
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
        {/* Modal Header */}
        
        {!hideHeader && (
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}

        <button
          type="button"
          className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Modal Body (Scrollable) */}
        <div className="p-4 overflow-auto max-h-[400px]">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;
