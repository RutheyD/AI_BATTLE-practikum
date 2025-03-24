

import { Box, Button, IconButton, InputAdornment, TextField, Snackbar, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

axios.interceptors.response.use(
  (response) => response, // השגיאה לא תעבור לקונסול
  (error) => {
    // עצור את הדפסת השגיאות בקונסול
    if (error.response) {
      // תחזיר רק את המידע שאנחנו רוצים (כמו message או error)
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error); // במקרה שאין תגובה
  }
);

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          `${API_BASE_URL}/api/User/login`,
          { Email: values.email, Password: values.password },
          { headers: { "Content-Type": "application/json", Accept: "application/json" } }
        );
      
        if (res.data?.token) {
          sessionStorage.setItem("token", res.data.token);
          succeedFunc();
        } else {
          setErrorMessage("Unexpected response from server");
          setOpenSnackbar(true);
        }
      } catch (e: any) {
        setSubmitting(false);
        // לוג של כל השגיאה המלאה כדי להבין מה מגיע מהשרת
        console.log("Full error:", e);
      
        if (e.response) {
          // בדוק אם ה-response כולל שדה title
          const status = e.response.status;      
          const message = e.response.data?.title || "An error occurred. Please try again later.";  // השתמש ב-title אם קיים
      
          if (status === 401) {
            setErrorMessage(message); // הצגת הודעה למשתמש על שגיאה 401
          } else if (status === 404) {
            setErrorMessage("User not found in the system.");
          } else {
            setErrorMessage(message); // הצגת הודעה למשתמש על שגיאה אחרת
          }
          setOpenSnackbar(true);
        } else {
          // אם אין response, הכוונה היא לבעיה חיבור
          console.log("No response from server:", e);
          setErrorMessage("Network Error: Please check your internet connection.");
          setOpenSnackbar(true);
        }
      }
  
    },
  });

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          type="email"
          fullWidth
          label="Email"
          variant="outlined"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          type={showPassword ? "text" : "password"}
          fullWidth
          label="Password"
          variant="outlined"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          type="submit"
          disabled={formik.isSubmitting}
          sx={{
            backgroundColor: "#FF80AB",
            color: "white",
            textTransform: "none",
            borderRadius: 2,
            "&:hover": { backgroundColor: "#D81B60" },
          }}
        >
          {formik.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;

