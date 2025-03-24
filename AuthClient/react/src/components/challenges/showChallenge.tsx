// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import axios from 'axios';
// import { Button, Grid, Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
// import { AppDispatch, RootState } from '../redux/store';
// import { getImageByChallengeId } from '../redux/imageSlice';
// import { useParams } from 'react-router';
// import Vote from '../Pictures/vote';
// import FileUploader from '../Pictures/uploadPicture';
// import { getChallengeById } from '../redux/challengeSlice';
// import { motion } from 'framer-motion';
// import ImageViewer from './imageViewer';
// import axios from 'axios';
// import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

// const ShowChallenge = () => {
// //   const dispatch = useDispatch();
// //   const images = useSelector((state) => state.);
// const {id}=useParams();

//   // const [image, setImage] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   const dispatch=useDispatch<AppDispatch>();
//   const ImagesOfChallenge=useSelector((state:RootState)=>state.iamges.imagesByChallenge);
//   const challenge=useSelector((state:RootState)=>state.challenges.selectedChallenge)
//   useEffect(()=>{
//       dispatch(getImageByChallengeId(Number(id)));
//       dispatch(getChallengeById(Number(id)));
//   },[id,dispatch])
// const handleDownload = async (fileName: string) => {
//   try {
//     const response = await axios.get('http://localhost:5037/api/Image/getUrl', {
//       params: { fileName }
//     });

//     const downloadUrl = response.data.url;

//     if (!downloadUrl) {
//       console.error("No URL returned from server!");
//       return;
//     }

//     console.log("Download URL:", downloadUrl);

//     // בקשה לקבלת הקובץ בפורמט blob
//     const fileResponse = await axios.get(downloadUrl, {
//       responseType: 'blob' // גורם להחזרת קובץ במקום להציג אותו
//     });

//     // יצירת כתובת URL לנתונים
//     const blobUrl = URL.createObjectURL(fileResponse.data);

//     // יצירת קישור להורדה
//     const link = document.createElement("a");
//     link.href = blobUrl;
//     link.setAttribute("download", fileName); // שם הקובץ שישמר
//     document.body.appendChild(link);
//     link.click();

//     // ניקוי הזיכרון
//     document.body.removeChild(link);
//     URL.revokeObjectURL(blobUrl);
//   } catch (error) {
//     console.error("Error downloading the image:", error);
//   }
// };


//   return (
    
    
//     <>
//     {challenge&&
// <div style={{ padding: '20px' }}>
// <Typography variant="h3" gutterBottom>{challenge.title}</Typography>
// <Typography variant="h4" paragraph>{challenge.description}</Typography>
//  <FileUploader idChallenge={Number(id)}/>
// <Grid container spacing={2}>
//   {ImagesOfChallenge.map((image, index) => (


// <Grid item xs={12} sm={6} md={4} key={index}>
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.2, duration: 0.5 }}
//   >
//     <Card sx={{ position: 'relative' }}> {/* הכרטיס יהיה בעל מיקום יחסי */}
//       <ImageViewer fileName={`${image.fileName}`} />
      
//       {/* כפתור הורדה */}
//       <IconButton
//         onClick={() => handleDownload(image.fileName)}
//         sx={{
//           color: 'black',
//           '&:hover': { color: '#e91e63' },
//           transition: 'color 0.3s ease',
//           position: 'absolute', 
//           bottom: 16, 
//           left: 16, 
//           fontSize: '36px', 
       
//         }}
//       >
//         <DownloadOutlinedIcon />
//       </IconButton>

//       <CardContent>
//         <Typography variant="h6">pic {index + 1}</Typography>
//         <Vote imageId={image.id} challengeId={image.challengeId} />
//         <Typography variant="h6">{image.countVotes}</Typography>
//       </CardContent>
//     </Card>
//   </motion.div>
// </Grid>

//   ))}
// </Grid>
// </div> }</>
//   );
// };

// export default ShowChallenge;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, Grid, Card, CardMedia, CardContent, Typography, Box, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import { AppDispatch, RootState } from '../redux/store';
// import { getImageByChallengeId } from '../redux/imageSlice';
// import { useParams } from 'react-router';
// import Vote from '../Pictures/vote';
// import FileUploader from '../Pictures/uploadPicture';
// import { getChallengeById } from '../redux/challengeSlice';
// import { motion } from 'framer-motion';
// import ImageViewer from './imageViewer';
// import axios from 'axios';
// import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const ShowChallenge = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch<AppDispatch>();
//   const ImagesOfChallenge = useSelector((state: RootState) => state.iamges.imagesByChallenge);
//   const challenge = useSelector((state: RootState) => state.challenges.selectedChallenge);

//   useEffect(() => {
//     dispatch(getImageByChallengeId(Number(id)));
//     dispatch(getChallengeById(Number(id)));
//   }, [id, dispatch]);

//   const handleDownload = async (fileName: string) => {
//     try {
//       const response = await axios.get('http://localhost:5037/api/Image/getUrl', {
//         params: { fileName },
//       });

//       const downloadUrl = response.data.url;

//       if (!downloadUrl) {
//         console.error("No URL returned from server!");
//         return;
//       }

//       // בקשה לקבלת הקובץ בפורמט blob
//       const fileResponse = await axios.get(downloadUrl, {
//         responseType: 'blob', // גורם להחזרת קובץ במקום להציג אותו
//       });

//       // יצירת כתובת URL לנתונים
//       const blobUrl = URL.createObjectURL(fileResponse.data);

//       // יצירת קישור להורדה
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.setAttribute('download', fileName); // שם הקובץ שישמר
//       document.body.appendChild(link);
//       link.click();

//       // ניקוי הזיכרון
//       document.body.removeChild(link);
//       URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error('Error downloading the image:', error);
//     }
//   };

//   return (
//     <>
//       {challenge && (
//         <div style={{ padding: '20px' }}>
//           <Typography variant="h3" gutterBottom>
//             {challenge.title}
//           </Typography>
//           {/* <Typography variant="h4" paragraph>
//             {challenge.description}
//           </Typography> */}

//           {/* INSTRUCTIONS Accordion */}
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="instructions-content"
//               id="instructions-header"
//             >
//               <Typography variant="h6" fontWeight="bold">
//                 Instructions
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 {challenge.description || 'No specific instructions available for this challenge.'}
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           <FileUploader idChallenge={Number(id)} />

//           <Grid container spacing={2}>
//             {ImagesOfChallenge.map((image, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2, duration: 0.5 }}
//                 >
//                   <Card sx={{ position: 'relative' }}>
//                     <ImageViewer fileName={`${image.fileName}`} />

//                     {/* Download button */}
//                     <IconButton
//                       onClick={() => handleDownload(image.fileName)}
//                       sx={{
//                         color: 'black',
//                         '&:hover': { color: '#e91e63' },
//                         transition: 'color 0.3s ease',
//                         position: 'absolute',
//                         bottom: 16,
//                         left: 16,
//                         fontSize: '36px',
//                       }}
//                     >
//                       <DownloadOutlinedIcon />
//                     </IconButton>

//                     <CardContent>
//                       <Typography variant="h6">pic {index + 1}</Typography>
//                       <Vote imageId={image.id} challengeId={image.challengeId} />
//                       <Typography variant="h6">{image.countVotes}</Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       )}
//     </>
//   );
// };

// export default ShowChallenge;

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Grid, Card,  CardContent, Typography,  IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { AppDispatch, RootState } from '../redux/store';
import { getImageByChallengeId } from '../redux/imageSlice';
import { useParams } from 'react-router';
import Vote from '../Pictures/vote';
import FileUploader from '../Pictures/uploadPicture';
import { getChallengeById } from '../redux/challengeSlice';
import { motion } from 'framer-motion';
import ImageViewer from './imageViewer';
import axios from 'axios';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShowChallenge = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const ImagesOfChallenge = useSelector((state: RootState) => state.iamges.imagesByChallenge);
  const challenge = useSelector((state: RootState) => state.challenges.selectedChallenge);

  useEffect(() => {
    dispatch(getImageByChallengeId(Number(id)));
    dispatch(getChallengeById(Number(id)));
  }, [id, dispatch]);

  const handleDownload = async (fileName: string) => {
    try {
      const response = await axios.get('http://localhost:5037/api/Image/getUrl', {
        params: { fileName },
      });

      const downloadUrl = response.data.url;

      if (!downloadUrl) {
        console.error("No URL returned from server!");
        return;
      }

      // בקשה לקבלת הקובץ בפורמט blob
      const fileResponse = await axios.get(downloadUrl, {
        responseType: 'blob', // גורם להחזרת קובץ במקום להציג אותו
      });

      // יצירת כתובת URL לנתונים
      const blobUrl = URL.createObjectURL(fileResponse.data);

      // יצירת קישור להורדה
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', fileName); // שם הקובץ שישמר
      document.body.appendChild(link);
      link.click();

      // ניקוי הזיכרון
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  return (
    <>
      {challenge && (
        <div style={{ padding: '20px', marginTop: '100px',fontWeight: 'bold', color: "rgba(255, 64, 129, 0.8)" }}>
          <Typography variant="h3" gutterBottom>
            {challenge.title}
          </Typography>
          
          {/* INSTRUCTIONS Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="instructions-content"
              id="instructions-header"
            >
              <Typography variant="h6" fontWeight="bold" style={{ textAlign: 'center' }}>
                Instructions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {challenge.description || 'No specific instructions available for this challenge.'}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <FileUploader idChallenge={Number(id)} />

          <Grid container spacing={2}>
            {ImagesOfChallenge.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card sx={{ position: 'relative' }}>
                    <ImageViewer fileName={`${image.fileName}`} />

                    {/* Download button */}
                    <IconButton
                      onClick={() => handleDownload(image.fileName)}
                      sx={{
                        color: 'black',
                        '&:hover': { color: '#e91e63' },
                        transition: 'color 0.3s ease',
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        fontSize: '36px',
                      }}
                    >
                      <DownloadOutlinedIcon />
                    </IconButton>

                    <CardContent>
                      <Typography variant="h6">pic {index + 1}</Typography>
                      <Vote imageId={image.id} challengeId={image.challengeId} />
                      <Typography variant="h6">{image.countVotes}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default ShowChallenge;
