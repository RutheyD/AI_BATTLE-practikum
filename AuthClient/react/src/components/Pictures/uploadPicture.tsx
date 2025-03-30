import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserIdByToken } from "../store/getFromToken";
import { Box, Button, LinearProgress, Card, CardMedia } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getImageByChallengeId } from "../redux/imageSlice";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const FileUploader = ({ idChallenge }: { idChallenge: number }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const token = sessionStorage.getItem('token')
  const dispatch = useDispatch<AppDispatch>();
  useSelector((state: RootState) => state.iamges.imagesByChallenge);
  const [preview, setPreview] = useState<string>("");
  const canUpload = token != null;
  useEffect(() => {
    dispatch(getImageByChallengeId(Number(idChallenge)));
  }, [dispatch]);
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
  }; 2

  return (
    canUpload && (
      <Box
        sx={{
          position: "fixed",
          top: 80,
          left: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 2,
          backgroundColor: "white",
          borderRadius: 2,
          width: 250,
          zIndex: 10,
        }}
      >
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{
          width: "fit-content", backgroundColor: "#ff4081",
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
