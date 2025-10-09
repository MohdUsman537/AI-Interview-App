import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      if (setPreview) setPreview(previewUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="profile-photo-selector">
      {preview ? (
        <img
          src={preview}
          alt="Profile Preview"
          className="preview-image"
          style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '50%' }}
        />
      ) : (
        <LuUser size={150} />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      <div className="buttons" style={{ marginTop: 10 }}>
        <button onClick={onChooseFile} style={{ marginRight: 10 }}>
          <LuUpload style={{ marginRight: 5 }} />
          Choose Photo
        </button>

        {preview && (
          <button onClick={handleRemoveImage} style={{ backgroundColor: 'red', color: 'white' }}>
            <LuTrash style={{ marginRight: 5 }} />
            Remove Photo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
