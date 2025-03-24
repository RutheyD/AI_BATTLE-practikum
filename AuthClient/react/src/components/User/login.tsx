// import { Box, Button, Modal, TextField } from "@mui/material"
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
//     const [open, setOpen] = useState(false);
//     // const [logIn, setLogIn] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);
//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`http://localhost:5037/api/User/login`, {
//                 Email: emailRef.current?.value,
//                 Password: passwordRef.current?.value,
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json', // Specify that the request body is JSON
//                     'Accept': 'application/json' // Indicate that you expect a JSON response
//                 }});
//             if (res.data && res.data.token) {
//                 sessionStorage.setItem('token', res.data.token);
//                 console.log('Token stored:', res.data.token); // Log the token being stored
//             } else {
//                 console.log('Token not found in response');
//             }
//             succeedFunc()
//             handleClose();
//         }
//         catch (e: any) {
//             console.log(e)
//             if((e.response&&e.response===401)||e.response===400){
//                 alert('email or password are not correct')
//             }
//         }
//     }
//     return (<>
//         <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
//             <Button onClick={handleOpen}>Login</Button>
//         </Box>
//         <Modal
//             open={open}
//             onClose={handleClose}
//         >
//             <Box sx={style}>
//                 <form onSubmit={handleSubmit}>
//                     <TextField type='email' fullWidth label="Email" variant="outlined" inputRef={emailRef} />
//                     <TextField type='password' fullWidth label='Password' variant="outlined" inputRef={passwordRef} />
//                     <Button fullWidth type='submit' sx={{ color: 'var(--secondary-color)' }}>Signin</Button>
//                 </form>
//             </Box>
//         </Modal>
//     </>)
// }
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
// export default Login

// import { Box, Button, TextField } from "@mui/material";
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const [error, setError] = useState<string>('');

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `http://localhost:5037/api/User/login`,
//         {
//           Email: emailRef.current?.value,
//           Password: passwordRef.current?.value,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//           },
//         }
//       );
//       if (res.data && res.data.token) {
//         sessionStorage.setItem('token', res.data.token);
//         succeedFunc();
//       } else {
//         console.log('Token not found in response');
//       }
//     } catch (e: any) {
//       console.log(e);
//       if ((e.response && e.response === 401) || e.response === 400) {
//         alert('Email or password are incorrect');
//       }
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         type="email"
//         fullWidth
//         label="Email"
//         variant="outlined"
//         inputRef={emailRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//       />
//       <TextField
//         type="password"
//         fullWidth
//         label="Password"
//         variant="outlined"
//         inputRef={passwordRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//       />
//       <Button
//         fullWidth
//         type="submit"
//         sx={{ color: 'var(--secondary-color)' }}
//         onClick={handleSubmit}
//       >
//         Sign in
//       </Button>
//     </Box>
//   );
// };

// export default Login;



// import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => 
//   {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const [error, setError] = useState<string>("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `http://localhost:5037/api/User/login`,
//         {
//           Email: emailRef.current?.value,
//           Password: passwordRef.current?.value,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//           },
//         }
//       );
//       if (res.data && res.data.token) {
//         sessionStorage.setItem("token", res.data.token);
//         succeedFunc();
//       } else {
//         console.log("Token not found in response");
//       }
//     } catch (e: any) {
//       console.log(e);
//       if (e.response && (e.response.status === 401 || e.response.status === 400)) {
//         alert("Email or password are incorrect");
//       }
      
//     }
//   };

//   return (<>
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         type="email"
//         fullWidth
//         label="Email"
//         variant="outlined"
//         inputRef={emailRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//         sx={{
//           "& .MuiInputBase-root": {
//             borderRadius: 1,
//           },
//           "& .MuiOutlinedInput-root": {
//             borderColor: "#d0d0d0",
//           },
//           "&:hover .MuiOutlinedInput-root": {
//             borderColor: "#FF80AB", // צבע ורוד בהיר על hover
//           },
//         }}
//       />
//       {/* <TextField
//         type="password"
//         fullWidth
//         label="Password"
//         variant="outlined"
//         inputRef={passwordRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//         sx={{
//           "& .MuiInputBase-root": {
//             borderRadius: 1,
//           },
//           "& .MuiOutlinedInput-root": {
//             borderColor: "#d0d0d0",
//           },
//           "&:hover .MuiOutlinedInput-root": {
//             borderColor: "#FF80AB",
//           },
//         }}
//       /> */}
//        <TextField
//       type={showPassword ? "text" : "password"}
//       fullWidth
//       label="Password"
//       variant="outlined"
//       inputRef={passwordRef}
//       error={!!error}
//       helperText={error ? "This field is required" : ""}
//       sx={{
//         "& .MuiInputBase-root": {
//           borderRadius: 1,
//         },
//         "& .MuiOutlinedInput-root": {
//           borderColor: "#d0d0d0",
//         },
//         "&:hover .MuiOutlinedInput-root": {
//           borderColor: "#FF80AB",
//         },
//       }}
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton onClick={handleTogglePassword} edge="end">
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//     />
//       <Button
//         fullWidth
//         type="submit"
//         sx={{
//           backgroundColor: "#FF80AB",
//           color: "white",
//           textTransform: "none",
//           borderRadius: 2,
//           "&:hover": {
//             backgroundColor: "#D81B60",
//           },
//         }}
//         onClick={handleSubmit}
//       >
//         Sign in
//       </Button>
//     </Box>
//  </> );
// };

// export default Login;

// import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const [error, setError] = useState<string>("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `http://localhost:5037/api/User/login`,
//         {
//           Email: emailRef.current?.value,
//           Password: passwordRef.current?.value,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//           },
//         }
//       );

//       if (res.data && res.data.token) {
//         sessionStorage.setItem("token", res.data.token);
//         succeedFunc();
//       } else {
//         console.log("Token not found in response");
//       }
//     } catch (e: any) {
//       console.log(e);
//       if (e.response && (e.response.status === 401 || e.response.status === 400)) {
//         alert("Email or password are incorrect");
//       }
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         type="email"
//         fullWidth
//         label="Email"
//         variant="outlined"
//         inputRef={emailRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//         sx={{
//           "& .MuiInputBase-root": { borderRadius: 1 },
//           "& .MuiOutlinedInput-root": { borderColor: "#d0d0d0" },
//           "&:hover .MuiOutlinedInput-root": { borderColor: "#FF80AB" },
//         }}
//       />

//       <TextField
//         type={showPassword ? "text" : "password"}
//         fullWidth
//         label="Password"
//         variant="outlined"
//         inputRef={passwordRef}
//         error={!!error}
//         helperText={error ? "This field is required" : ""}
//         sx={{
//           "& .MuiInputBase-root": { borderRadius: 1 },
//           "& .MuiOutlinedInput-root": { borderColor: "#d0d0d0" },
//           "&:hover .MuiOutlinedInput-root": { borderColor: "#FF80AB" },
//         }}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={handleTogglePassword} edge="end">
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />

//       <Button
//         fullWidth
//         type="submit"
//         sx={{
//           backgroundColor: "#FF80AB",
//           color: "white",
//           textTransform: "none",
//           borderRadius: 2,
//           "&:hover": { backgroundColor: "#D81B60" },
//         }}
//         onClick={handleSubmit}
//       >
//         Sign in
//       </Button>
//     </Box>
//   );
// };

// export default Login;



// import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         const res = await axios.post(
//           `http://localhost:5037/api/User/login`,
//           { Email: values.email, Password: values.password },
//           { headers: { "Content-Type": "application/json", Accept: "application/json" } }
//         );

//         if (res.data?.token) {
//           sessionStorage.setItem("token", res.data.token);
//           succeedFunc();
//         } else {
//           alert("Unexpected response from server");
//         }
//       } catch (e: any) {
//         setSubmitting(false);

//         if (e.response) {
//           const status = e.response.status;

//           if (status === 404) {
//             alert("User not found in the system");
//           } else if (status === 401 || status === 400) {
//             alert("Invalid email or password");
//           } else {
//             alert("An error occurred. Please try again later.");
//           }
//         } else {
//           alert("Server is unreachable. Please check your internet connection.");
//         }
//       }
//     },
//   });

//   return (
//     <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         type="email"
//         fullWidth
//         label="Email"
//         variant="outlined"
//         {...formik.getFieldProps("email")}
//         error={formik.touched.email && Boolean(formik.errors.email)}
//         helperText={formik.touched.email && formik.errors.email}
//       />

//       <TextField
//         type={showPassword ? "text" : "password"}
//         fullWidth
//         label="Password"
//         variant="outlined"
//         {...formik.getFieldProps("password")}
//         error={formik.touched.password && Boolean(formik.errors.password)}
//         helperText={formik.touched.password && formik.errors.password}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />

//       <Button
//         fullWidth
//         type="submit"
//         disabled={formik.isSubmitting}
//         sx={{
//           backgroundColor: "#FF80AB",
//           color: "white",
//           textTransform: "none",
//           borderRadius: 2,
//           "&:hover": { backgroundColor: "#D81B60" },
//         }}
//       >
//         {formik.isSubmitting ? "Signing in..." : "Sign in"}
//       </Button>
//     </Box>
//   );
// };

// export default Login;



// import { Box, Button, IconButton, InputAdornment, TextField, Snackbar, Alert } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// const Login = ({ succeedFunc }: { succeedFunc: Function }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state
//   const [errorMessage, setErrorMessage] = useState(""); // Store error message

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         const res = await axios.post(
//           `http://localhost:5037/api/User/login`,
//           { Email: values.email, Password: values.password },
//           { headers: { "Content-Type": "application/json", Accept: "application/json" } }
//         );

//         if (res.data?.token) {
//           sessionStorage.setItem("token", res.data.token);
//           succeedFunc();
//         } else {
//           setErrorMessage("Unexpected response from server");
//           setOpenSnackbar(true);
//         }
//       } catch (e: any) {
//         setSubmitting(false);

//         if (e.response) {
//           const status = e.response.status;
//           const message = e.response.data?.message || "An error occurred. Please try again later.";

//           if (status === 401) {
//             setErrorMessage("Invalid email or password.");
//           } else if (status === 404) {
//             setErrorMessage("User not found in the system.");
//           } else {
//             setErrorMessage(message);
//           }
//           setOpenSnackbar(true);
//         } else {
//           setErrorMessage("Network Error: Please check your internet connection.");
//           setOpenSnackbar(true);
//         }
//       }
//     },
//   });

//   return (
//     <>
//       <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField
//           type="email"
//           fullWidth
//           label="Email"
//           variant="outlined"
//           {...formik.getFieldProps("email")}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />

//         <TextField
//           type={showPassword ? "text" : "password"}
//           fullWidth
//           label="Password"
//           variant="outlined"
//           {...formik.getFieldProps("password")}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Button
//           fullWidth
//           type="submit"
//           disabled={formik.isSubmitting}
//           sx={{
//             backgroundColor: "#FF80AB",
//             color: "white",
//             textTransform: "none",
//             borderRadius: 2,
//             "&:hover": { backgroundColor: "#D81B60" },
//           }}
//         >
//           {formik.isSubmitting ? "Signing in..." : "Sign in"}
//         </Button>
//       </Box>

//       {/* Snackbar with error message */}
//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
//           {errorMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default Login;

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
          `http://localhost:5037/api/User/login`,
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

