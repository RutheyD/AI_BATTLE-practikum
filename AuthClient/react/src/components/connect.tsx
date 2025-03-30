
// import { Button, Typography, Box } from "@mui/material";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Connection from "./User/connection";

// const backgroundImages = [
    
//     "/assets/robot2.jpg",
//     "/assets/brain.png",
//     "/assets/robot.png",
//     "/assets/win.jpeg",
//     "/assets/win1.jpeg",
//     "/assets/circle.jpg",
//     "/assets/AI.jpg",
//     "/assets/root2.jpg",
// ];
// const Connect = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(backgroundImages[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage(
//         backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${currentImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         p: 3,
//         backdropFilter: "blur(5px)",
//         transition: "background-image 1s ease-in-out"
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             color: "#ff4081",
//             fontWeight: 700,
//             textShadow: "0px 0px 15px rgba(255, 64, 129, 0.8)",
//           }}
//           gutterBottom
//         >
//         🤖 Welcome to AI Battle! ⚡
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: "#80d8ff",
//             maxWidth: 600,
//             textShadow: "0px 0px 10px rgba(128, 216, 255, 0.8)",
//           }}
//         >
//           Join the ultimate AI-generated art competition! Upload your
//           masterpiece 🎨, vote for your favorites ⭐, and climb to the top! 🏆
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <Button
//           variant="contained"
//           sx={{
//             mt: 4,
//             px: 4,
//             py: 1.5,
//             fontSize: "1.2rem",
//             borderRadius: "50px",
//             background: "linear-gradient(90deg, #ff4081, #7c4dff)",
//             color: "white",
//             boxShadow: "0px 0px 20px rgba(255, 64, 129, 0.8)",
//             textTransform: "uppercase",
//             fontWeight: "bold",
//             "&:hover": {
//               background: "linear-gradient(90deg, #ff79a9, #9575cd)",
//             },
//           }}
//           onClick={() => setDialogOpen(true)}
//         >
//           🚀 Get Started Now!
//         </Button>
//       </motion.div>

//       <Connection open={isDialogOpen} onClose={() => setDialogOpen(false)} />
//     </Box>
//   );
// };

// export default Connect;




// import { Button, Typography, Box } from "@mui/material";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowForward, ArrowBack } from "@mui/icons-material"; // חיצים
// import Connection from "./User/connection";

// const backgroundImages = [
//   "/assets/robot2.jpg",
//   "/assets/brain.png",
//   "/assets/robot.png",
//   "/assets/win.jpeg",
//   "/assets/win1.jpeg",
//   "/assets/circle.jpg",
//   "/assets/AI.jpg",
//   "/assets/root2.jpg",
// ];

// const Connect = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex(Math.floor(Math.random() * backgroundImages.length));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNextImage = () => {
//     setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//   };

//   const handlePrevImage = () => {
//     setImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         p: 3,
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             color: "#ff4081",
//             fontWeight: 700,
//             textShadow: "0px 0px 15px rgba(255, 64, 129, 0.8)",
//           }}
//           gutterBottom
//         >
//           🤖 Welcome to AI Battle! ⚡
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: "#80d8ff",
//             maxWidth: 600,
//             textShadow: "0px 0px 10px rgba(128, 216, 255, 0.8)",
//           }}
//         >
//           Join the ultimate AI-generated art competition! Upload your
//           masterpiece 🎨, vote for your favorites ⭐, and climb to the top! 🏆
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <Button
//           variant="contained"
//           sx={{
//             mt: 4,
//             px: 4,
//             py: 1.5,
//             fontSize: "1.2rem",
//             borderRadius: "50px",
//             background: "linear-gradient(90deg, #ff4081, #7c4dff)",
//             color: "white",
//             boxShadow: "0px 0px 20px rgba(255, 64, 129, 0.8)",
//             textTransform: "uppercase",
//             fontWeight: "bold",
//             "&:hover": {
//               background: "linear-gradient(90deg, #ff79a9, #9575cd)",
//             },
//           }}
//           onClick={() => setDialogOpen(true)}
//         >
//           🚀 Get Started Now!
//         </Button>
//       </motion.div>

//       <Connection open={isDialogOpen} onClose={() => setDialogOpen(false)} />

//       {/* גלריה של תמונות בתחתית העמוד */}
//       <Box
//         sx={{
//           position: "fixed",
//           bottom: 0,
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           p: 2,
//           backgroundColor: "rgba(0, 0, 0, 0.6)", // רקע כהה לתחתית
//         }}
//       >
//         <ArrowBack
//           onClick={handlePrevImage}
//           sx={{ cursor: "pointer", color: "#ff4081", fontSize: "3rem", mr: 2 }}
//         />
//         <Box sx={{ display: "flex", overflowX: "scroll", gap: 2 }}>
//           {backgroundImages.map((image, index) => (
//             <Box
//               key={index}
//               sx={{
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100px", // גודל קטן
//                 height: "100px", // גודל קטן
//                 borderRadius: "8px",
//                 boxShadow: "0px 0px 10px rgba(255, 64, 129, 0.8)",
//                 opacity: index === imageIndex ? 1 : 0.6,
//                 transition: "opacity 0.3s ease",
//               }}
//             />
//           ))}
//         </Box>
//         <ArrowForward
//           onClick={handleNextImage}
//           sx={{ cursor: "pointer", color: "#ff4081", fontSize: "3rem", ml: 2 }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Connect;

import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import Connection from "./User/connection";

const Connect = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#ff4081",
            fontWeight: 700,
            textShadow: "0px 0px 15px rgba(255, 64, 129, 0.8)",
          }}
          gutterBottom
        >
          🤖 Welcome to AI Battle! ⚡
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#80d8ff",
            maxWidth: 600,
            textShadow: "0px 0px 10px rgba(128, 216, 255, 0.8)",
          }}
        >
          Join the ultimate AI-generated art competition! Upload your
          masterpiece 🎨, vote for your favorites ⭐, and climb to the top! 🏆
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            borderRadius: "50px",
            background: "linear-gradient(90deg, #ff4081, #7c4dff)",
            color: "white",
            boxShadow: "0px 0px 20px rgba(255, 64, 129, 0.8)",
            textTransform: "uppercase",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #ff79a9, #9575cd)",
            },
          }}
          onClick={() => setDialogOpen(true)}
        >
          🚀 Get Started Now!
        </Button>
      </motion.div>

      <Connection open={isDialogOpen} onClose={() => setDialogOpen(false)} />
    </Box>
  );
};

export default Connect;
