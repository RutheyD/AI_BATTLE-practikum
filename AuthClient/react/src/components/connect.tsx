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
