import { SyntheticEvent, useEffect, useState } from "react";
import { Dialog, DialogTitle, IconButton, Tabs, Tab, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./login";
import Register from "./register";

  const Connection = ({ open, onClose }: { open: boolean; onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void }) => {
    const [tabIndex, setTabIndex] = useState(0);
  
    useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token) setTabIndex(0);
    }, []);
  
    const handleChange = (event: SyntheticEvent, newIndex: number) => {
      setTabIndex(newIndex);
      console.log(event);
      
    };
  
    return (
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            backgroundColor: "white",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {/* כפתור סגירה */}
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={(event) => onClose(event, "escapeKeyDown")} sx={{ color: "rgb(255, 0, 0)" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
  
        {/* תוכן הדיאלוג */}
        <Box sx={{ width: "100%", height: 510, display: "flex", flexDirection: "column", borderRadius: 2 }}>
          {/* טאבים עם צבע עדין */}
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            centered
            sx={{
              backgroundColor: "rgba(255, 0, 191, 0.07)", // ורוד בהיר מאוד
              "& .MuiTab-root": {
                color: "#333", // טקסט כהה
                fontWeight: "bold",
                textTransform: "none",
              },
              "& .MuiTabs-indicator": { backgroundColor: "#D81B60" }, // ורוד כהה לקו מתחת
            }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
  
          {/* גוף הדיאלוג */}
          <Box sx={{ p: 3, flex: 1 }}>
            {tabIndex === 0 ? <Login succeedFunc={onClose} /> : <Register succeedFunc={onClose} />}
          </Box>
        </Box>
      </Dialog>
    );
  };
  
  export default Connection;
  


