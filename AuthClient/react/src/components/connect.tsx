// import { Button } from '@mui/material';
// import image from '../assets/222.jpg';
// import { useState } from 'react';
// import Connection from './User/connection';

// const Connect = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   return (
//    <> 
//    <p>
//     Hello we are so happy you are here, sign up in order to vote or upload images
//    </p>
//    <div>
//     <Button onClick={() => setDialogOpen(true)}>Get Start</Button>
//     {/* <Connection open={isDialogOpen} onClose={() => setDialogOpen(false)} /> */}
//     {/* <Connection open={isDialogOpen} onClose={(event: {}, reason: "backdropClick" | "escapeKeyDown") => setDialogOpen(false)} /> */}
//     <Connection
//   open={isDialogOpen}
//   onClose={(event: {}, reason: "backdropClick" | "escapeKeyDown"): void => setDialogOpen(false)}/>
//   </div>
//   </>)
  
// }
//   export default Connect
////////////
// import { Button, Typography, Box } from "@mui/material";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Connection from "./User/connection";
// import image from "../assets/222.jpg";

// const Connect = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
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
//         <Typography variant="h3" color="white" fontWeight={700} gutterBottom>
//           🎨 Welcome to the Creativity Arena! 🎉
//         </Typography>
//         <Typography variant="h5" color="white" maxWidth={600}>
//           Join our creative community, upload your artwork 🖼️, vote for your
//           favorite creations ❤️, and let your creativity shine!
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
//             backgroundColor: "#ff6b6b",
//             color: "white",
//             boxShadow: "0px 4px 15px rgba(255, 107, 107, 0.5)",
//             "&:hover": {
//               backgroundColor: "#ff5252",
//             },
//           }}
//           onClick={() => setDialogOpen(true)}
//         >
//           🚀 Join Now!
//         </Button>
//       </motion.div>

//       <Connection open={isDialogOpen} onClose={() => setDialogOpen(false)} />
//     </Box>
//   );
// };

// export default Connect;
////////////
// import { Button, Typography, Box } from "@mui/material";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Connection from "./User/connection";
// import image from "../assets/222.jpg";

// const Connect = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${image})`,
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
//     </Box>
//   );
// };

// export default Connect;



///////////
import { Button, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Connection from "./User/connection";

const backgroundImages = [
    
    // "../../public/assets/robot2.jpg",
    // "../../public/assets/brain.png",
    // "../../public/assets/robot.png",
    // "../../public/assets/win.jpeg",
    // "../../public/assets/win1.jpeg",
    "../../public/assets/circle.jpg",
    "../../public/assets/AI.jpg",
    "../../public/assets/root2.jpg",

  
  
];
const Connect = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity:"50%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        backdropFilter: "blur(5px)",
        transition: "background-image 1s ease-in-out"
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
/////////
