import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ImageViewer = ({ fileName }:{ fileName :string}) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // שלב 1: שלח בקשה ל-API לקבלת ה-Presigned URL
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/Image/getUrl`, {
          params: { fileName } 
        });

        setImageUrl(response.data.url); 
      } catch (error) {
        console.error('שגיאה בהבאת ה-URL:', error);
      }
    };

    fetchImageUrl();
  }, [fileName]); 

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Uploaded Image" style={{ width: '100%', borderRadius: '8px' }} />
      ) : (
        <p>טוען תמונה...</p>
      )}
    </div>
  );
};

export default ImageViewer;
