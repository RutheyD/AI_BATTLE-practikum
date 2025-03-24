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
    const [showConfetti, setShowConfetti] = useState(true);  

    useEffect(() => {
        dispatch(getTopImagesByChallenge());

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


