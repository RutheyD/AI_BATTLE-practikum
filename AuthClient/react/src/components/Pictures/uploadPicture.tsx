// // React Component
// import React, { useState } from 'react';
// import axios from 'axios';
// import { getUserIdByToken } from '../store/getFromToken';
// import { Box, Button, Typography } from '@mui/material';

// const FileUploader = ({idChallenge}:{idChallenge:number}) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [progress, setProgress] = useState(0);
//   const token = sessionStorage.getItem('token')
//   const [canUpload,setCanUpload]=useState(token!=null)

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       // שלב 1: קבלת Presigned URL מהשרת
//       const response = await axios.get('http://localhost:5037/api/Image/presigned-url', {
//         params: {
//           fileName: file.name,
//           contentType: file.type,
//           challengeId:idChallenge,
//         }, headers: {
//           'Content-Type': file.type,
//           'Authorization': `Bearer ${token}`
//         },
//       });

//       const presignedUrl = response.data.url;
//       console.log(presignedUrl);

//       // שלב 2: העלאת הקובץ ישירות ל-S3
//       await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': file.type,
//           // 'Authorization': `Bearer ${token}`
//         },
//         onUploadProgress: (progressEvent) => {
//           const percent = Math.round(
//             (progressEvent.loaded * 100) / (progressEvent.total || 1)
//           );
//           setProgress(percent);
//         },
//       });

//     //   const imageData = {
//     //     imageUrl: presignedUrl,
//     //     userId: getUserIdByToken(),
//     //     challengeId: idChallenge,   //=??????????????????????????????????????
//     //     // הוסף כאן שדות נוספים אם יש צורך
//     //   };
//     const imageUrl = presignedUrl.split('?')[0];

//     const imageData = {
//         imageUrl: imageUrl, // Use the base URL here
//         userId: getUserIdByToken(),
//         challengeId: idChallenge,
//         fileName:file.name,
//     };
//       await axios.post('http://localhost:5037/api/Image/upload/image', imageData, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       alert('הקובץ הועלה בהצלחה!');
//     } catch (error) {
//       console.error('שגיאה בהעלאה:', error);
//     }
//   };

//   return (
//     canUpload&&
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>העלה קובץ</button>
//       {progress > 0 && <div>התקדמות: {progress}%</div>}
//     </div>
//   );
// };

// export default FileUploader;




import React, { useState } from "react";
import axios from "axios";
import { getUserIdByToken } from "../store/getFromToken";
import { Box, Button, LinearProgress, Card, CardMedia } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const FileUploader = ({ idChallenge }:{idChallenge:number}) => {
  const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const token = sessionStorage.getItem('token')

  const [preview, setPreview] = useState<string>("");
  const canUpload = token != null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const response = await axios.get(`${API_BASE_URL}/api/Image/presigned-url`, {
        params: { fileName: file.name, contentType: file.type, challengeId: idChallenge },
        headers: { "Content-Type": file.type, Authorization: `Bearer ${token}` },
      });
      
      const presignedUrl = response.data.url;
      const imageUrl = presignedUrl.split("?")[0];

      await axios.put(presignedUrl, file, {
        headers: { "Content-Type": file.type },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
          setProgress(percent);
        },
      });

      const imageData = { imageUrl, userId: getUserIdByToken(), challengeId: idChallenge, fileName: file.name };
      await axios.post(`${API_BASE_URL}/api/Image/upload/image`, imageData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("הקובץ הועלה בהצלחה!");
    } catch (error) {
      console.error("שגיאה בהעלאה:", error);
    }
  };

  return (
    canUpload && (
//       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, p: 3 , mt: 10 }}>
//         <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ width: "fit-content" }}>
// choose a pic          <input type="file" hidden onChange={handleFileChange} />
//         </Button>
//         {preview && (
//           <Card sx={{ maxWidth: 250 }}>
//             <CardMedia component="img" height="140" image={preview} alt="Preview" />
//           </Card>
//         )}
//         <Button onClick={handleUpload} variant="contained" color="primary" disabled={!file}>
//            upload
//         </Button>
//         {progress > 0 && <LinearProgress variant="determinate" value={progress} sx={{ width: "100%" }} />}
//    
<Box
  sx={{
    position: "fixed",
    top: 80, // התאמה כך שיהיה מתחת ל-HEADER
    left: 20, // צמוד לצד שמאל
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    p: 2,
    backgroundColor: "white",
    // boxShadow: 3,
    borderRadius: 2,
    width: 250, // גודל קומפקטי
    zIndex: 10, // מבטיח שהתיבה לא תוסתר
  }}
>
<Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ width: "fit-content", backgroundColor: "#ff4081", 
    // color: "white",
    "&:hover": { backgroundColor: "rgb(255, 124, 48)" }
}}>
 choose a pic          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {preview && (
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia component="img" height="140" image={preview} alt="Preview" />
           </Card>
         )}
         <Button onClick={handleUpload} variant="contained" color="primary" disabled={!file}>
           upload
        </Button>
        {progress > 0 && <LinearProgress variant="determinate" value={progress} sx={{ width: "100%" }} />}
   
 </Box>
    )
  );
};

export default FileUploader;












// // React Component
// import React, { useState } from 'react';
// import axios from 'axios';
// import { getUserIdByToken } from '../store/getFromToken';

// const FileUploader = ({idChallenge}:{idChallenge:number}) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [progress, setProgress] = useState(0);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       const token = sessionStorage.getItem('token')
//       // שלב 1: קבלת Presigned URL מהשרת
//       console.log("tokennnnn " +token);
      
//       const response = await axios.get('http://localhost:5037/api/Image/presigned-url', {
//         params: {
//           fileName: file.name,
//           contentType: file.type ,
//           challengeId:idChallenge,
//         }, headers: {
//           'Content-Type': file.type,
//           'Authorization': `Bearer ${token}`
//         },
//       });

//       const presignedUrl = response.data.url;
//       console.log(presignedUrl);

//       // שלב 2: העלאת הקובץ ישירות ל-S3
//       await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': file.type,
//           // 'Authorization': `Bearer ${token}`
//         },
//         onUploadProgress: (progressEvent) => {
//           const percent = Math.round(
//             (progressEvent.loaded * 100) / (progressEvent.total || 1)
//           );
//           setProgress(percent);
//         },
//       });
//       const imageUrl = presignedUrl.split('?')[0];

//     const imageData = {
//         imageUrl: imageUrl, // Use the base URL here
//         userId: getUserIdByToken(),
//         challengeId: idChallenge,
//         fileName:file.name
//     };
//       await axios.post('http://localhost:5037/api/Image/upload/image', imageData, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       alert('Uploaded succesfully:)');
//     } catch (error) {
//       console.error('Error in uploading:(', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload image</button>
//       {progress > 0 && <div>התקדמות: {progress}%</div>}
//     </div>
//   );
// };

// export default FileUploader;

// import React, { useRef, useState } from 'react';
// import axios from 'axios';

// const UploadImage = () => {
//     const fileInputRef = useRef<HTMLInputElement>(null);
//     const [challengeId, setChallengeId] = useState('');

//     const handleUpload = async (e:any) => {
//         e.preventDefault();
//         const file = fileInputRef.current?.files?.[0];
//         if (!file) {
//             alert("Please select a file to upload.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append('File', file);
//         formData.append('ChallengeId', challengeId);

//         try {
//             const response = await axios.post('http://localhost:5070/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('File uploaded successfully:', response.data);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading file');
//         }
//     };

//     return (
//         <form onSubmit={handleUpload}>
//             <input type="file" ref={fileInputRef} />
//             <input
//                 type="text"
//                 placeholder="Challenge ID"
//                 value={challengeId}
//                 onChange={(e) => setChallengeId(e.target.value)}
//             />
//             <button type="submit">Upload</button>
//         </form>
//     );
// };

// export default UploadImage;
