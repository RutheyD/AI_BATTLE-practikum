import { Box, Button, IconButton, InputAdornment, Snackbar, TextField, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Register = ({ succeedFunc }: { succeedFunc: Function }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          `      ${API_BASE_URL}/api/User/register`,
          { Name: values.name, Email: values.email, PasswordHash: values.password },
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
        let message = "An error occurred. Please try again later.";

        if (e.response?.status === 400) {
          message = "Email already exists";
        } else if (!e.response) {
          message = "Server is unreachable. Please check your internet connection.";
        }

        setErrorMessage(message);
        setOpenSnackbar(true);
      }
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        type="text"
        fullWidth
        label="Full Name"
        variant="outlined"
        {...formik.getFieldProps("name")}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
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
        {formik.isSubmitting ? "Registering..." : "Register"}
      </Button>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
