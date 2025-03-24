// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
// import { getTopImagesByChallenge } from "../redux/topImagesSlice";
// import ImageViewer from "./imageViewer";
// import Confetti from 'react-confetti';

// const WinnersImages = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const winnersList = useSelector((state: RootState) => state.topImages.topImages);
//     const [showConfetti, setShowConfetti] = useState(true);  // Keep confetti always true

//     useEffect(() => {
//         dispatch(getTopImagesByChallenge());

//         // Set the confetti visibility and stop it after 1 minute
//         const interval = setInterval(() => {
//             setShowConfetti(true);  // Trigger confetti periodically
//         }, 10000);  // Confetti will appear every 10 seconds (you can adjust this)

//         // Stop confetti after 1 minute
//         const timeout = setTimeout(() => {
//             setShowConfetti(false);
//         }, 60000); // 60000ms = 1 minute

//         return () => {
//             clearInterval(interval);
//             clearTimeout(timeout);  // Cleanup the interval and timeout on unmount
//         };
//     }, [dispatch]);

//     return (
//         <>
//             {showConfetti && <Confetti />}
//             <Grid container spacing={2}>
//                 {winnersList.map((winner) => (
//                     <Grid item xs={12} sm={6} md={4} key={winner.id}>
//                         <Paper sx={{ padding: 2, textAlign: "center" }}>
//                             <CardMedia
//                                 component={ImageViewer}
//                                 fileName={winner.fileName}
//                                 sx={{ height: 200 }} // Adjust height as needed
//                             />
//                             <Typography variant="h6" component="div" gutterBottom>
//                                 {winner.challengeName}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Winner: {winner.userName}
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }

// export default WinnersImages;


// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
// import { getTopImagesByChallenge } from "../redux/topImagesSlice";
// import ImageViewer from "./imageViewer";
// import Confetti from 'react-confetti';

// const WinnersImages = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const winnersList = useSelector((state: RootState) => state.topImages.topImages);
//     const [showConfetti, setShowConfetti] = useState(true);  // Keep confetti always true

//     useEffect(() => {
//         dispatch(getTopImagesByChallenge());
        
//         // Keep the confetti visible indefinitely
//         const interval = setInterval(() => {
//             setShowConfetti(true);  // Trigger confetti periodically
//         }, 5000);  // Confetti appears every 5 seconds (you can adjust this)

//         return () => clearInterval(interval);  // Cleanup the interval on unmount
//     }, [dispatch]);

//     return (
//         <>
//             {showConfetti && (
//                 <Confetti
//                     gravity={0.1} // slower falling speed
//                     numberOfPieces={100} // Number of confetti pieces
//                     colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00']} // Customize colors
//                     recycle={true} // Make the confetti fall in loops
//                     initialVelocityX={5} // Slightly slower horizontal movement
//                     initialVelocityY={3} // Slightly slower vertical movement
//                 />
//             )}
//             <Grid container spacing={2}>
//                 {winnersList.map((winner) => (
//                     <Grid item xs={12} sm={6} md={4} key={winner.id}>
//                         <Paper sx={{ padding: 2, textAlign: "center" }}>
//                             <CardMedia
//                                 component={ImageViewer}
//                                 fileName={winner.fileName}
//                                 sx={{ height: 200 }} // Adjust height as needed
//                             />
//                             <Typography variant="h6" component="div" gutterBottom>
//                                 {winner.challengeName}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Winner: {winner.userName}
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }

// export default WinnersImages;


import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import {  CardMedia, Grid, Paper, Typography } from "@mui/material";
import { getTopImagesByChallenge } from "../redux/topImagesSlice";
import ImageViewer from "./imageViewer";
import Confetti from 'react-confetti';

const WinnersImages = () => {
    const dispatch = useDispatch<AppDispatch>();
    const winnersList = useSelector((state: RootState) => state.topImages.topImages);
    const [showConfetti, setShowConfetti] = useState(true);  // Show confetti on load

    useEffect(() => {
        dispatch(getTopImagesByChallenge());

        // Set the confetti to stop after 20 seconds
        const timeout = setTimeout(() => {
            setShowConfetti(false); // Hide confetti after 20 seconds
        }, 20000); // 20000 milliseconds = 20 seconds

        return () => clearTimeout(timeout);  // Cleanup the timeout on unmount
    }, [dispatch]);

    return (
        <>
            {showConfetti && (
                <Confetti
                    gravity={0.1} // Slower falling speed
                    numberOfPieces={100} // Number of confetti pieces
                    colors={['rgba(138, 140, 255, 0.8)' , 'rgba(255, 64, 129, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(255, 130, 58, 0.8)', 'rgba(85, 128, 255, 0.8)']} // Customize colors
                    recycle={true} // Recycle the confetti falling in loops
                    initialVelocityX={5} // Slower horizontal movement
                    initialVelocityY={3} // Slower vertical movement
                />
            )}
            <Grid container spacing={2}>
                {winnersList.map((winner) => (
                    <Grid item xs={12} sm={6} md={4} key={winner.id}>
                        <Paper sx={{ padding: 2, textAlign: "center" }}>
                            <CardMedia
                                component={ImageViewer}
                                fileName={winner.fileName}
                                sx={{ height: 200 }} // Adjust height as needed
                            />
                            <Typography variant="h6" component="div" gutterBottom>
                                {winner.challengeName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Winner: {winner.userName}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default WinnersImages;


