// import { Box, Button, Modal, TextField } from "@mui/material"
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";
// import { getUserIdByToken } from "../store/getFromToken";

// const Update=()=>{
//     const [open, setOpen] = useState(false);
//     // const [logIn, setLogIn] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const fullNameRef = useRef<HTMLInputElement>(null);
//     const handleSubmit = async (e: FormEvent) => {

//         e.preventDefault();
//        const userId=getUserIdByToken()
//        console.log("in updateeeeeeeeeeeee");
//        console.log(userId);
       
//         try {
//             const res = await axios.put(`http://localhost:5037/api/User/${+userId}`, {
//                 Email: emailRef.current?.value,
//                 FullName: fullNameRef.current?.value,
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
            
//             handleClose();
//         }
//         catch (e: any) {
//             console.log(e)
//             if((e.response&&e.response===401)||e.response===400){
//                 alert('email or password are not correct')
//             }
//         }
//     }
// return(<>

// <Box sx={{ position: 'absolute', top: 10, left: 200 }}>
//             <Button onClick={handleOpen}>Update</Button>
//         </Box>
//         <Modal
//             open={open}
//             onClose={handleClose}
//         >
//             <Box sx={style}>
//                 <form onSubmit={handleSubmit}>
//                     <TextField type='text' fullWidth label='FullName' variant="outlined" inputRef={fullNameRef} />
//                     <TextField type='email' fullWidth label="Email" variant="outlined" inputRef={emailRef} />
//                     <Button fullWidth type='submit' sx={{ color: 'var(--secondary-color)' }}>Update</Button>
//                 </form>
//             </Box>
//         </Modal>
// </>)
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
// export default Update

// import { Box, Button, Modal, TextField } from "@mui/material";
// import axios from "axios";
// import { FormEvent, useRef, useState } from "react";
// import { getUserIdByToken } from "../store/getFromToken";

// const Update = () => {
//   const [open, setOpen] = useState(true);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const fullNameRef = useRef<HTMLInputElement>(null);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const userId = getUserIdByToken();
//     console.log("in updateeeeeeeeeeeee");
//     console.log(userId);

//     try {
//       const res = await axios.put(
//         `http://localhost:5037/api/User/${+userId}`,
//         {
//           Email: emailRef.current?.value,
//           FullName: fullNameRef.current?.value,
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
//         console.log("Token stored:", res.data.token);
//       } else {
//         console.log("Token not found in response");
//       }

//       handleClose();
//     } catch (e: any) {
//       console.log(e);
//       if ((e.response && e.response === 401) || e.response === 400) {
//         alert("Email or password are incorrect");
//       }
//     }
//   };

//   return (
//     <>
     
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               type="text"
//               fullWidth
//               label="FullName"
//               variant="outlined"
//               inputRef={fullNameRef}
//               sx={{
//                 marginBottom: 2,
//                 "& .MuiInputBase-root": {
//                   borderRadius: 2,
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   borderColor: "#d0d0d0",
//                 },
//                 "&:hover .MuiOutlinedInput-root": {
//                   borderColor: "#FF80AB", // צבע שדה טקסט על hover
//                 },
//               }}
//             />
//             <TextField
//               type="email"
//               fullWidth
//               label="Email"
//               variant="outlined"
//               inputRef={emailRef}
//               sx={{
//                 marginBottom: 2,
//                 "& .MuiInputBase-root": {
//                   borderRadius: 2,
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   borderColor: "#d0d0d0",
//                 },
//                 "&:hover .MuiOutlinedInput-root": {
//                   borderColor: "#FF80AB", // צבע שדה טקסט על hover
//                 },
//               }}
//             />
//             <Button
//               fullWidth
//               type="submit"
//               sx={{
//                 backgroundColor: "#FF80AB",
//                 color: "white",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 "&:hover": {
//                   backgroundColor: "#D81B60", // צבע בהיר יותר בהובר
//                 },
//               }}
//             >
//               Update
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #d0d0d0", // גבולות עדינים
//   borderRadius: 2, // פינות מעוגלות
//   boxShadow: 24,
//   p: 4,
// };

// export default Update;



import { Box, Button, Modal, TextField, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserIdByToken } from "../store/getFromToken";

// אימות באמצעות Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
});
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Update = () => {
  const [open, setOpen] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ניהול טופס עם Formik
  const formik = useFormik({
    initialValues: { fullName: "", email: "" },
    validationSchema,
    onSubmit: async (values) => {
      const userId = getUserIdByToken();
      console.log("userId "+userId);

      try {
        const res = await axios.put(
          `${API_BASE_URL}/api/User/${+userId}`,
          {
            Email: values.email,
            Name: values.fullName,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          }
        );
        if (res.data && res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          console.log("Token stored:", res.data.token);
        } else {
          console.log("Token not found in response");
        }

        handleClose();
      } catch (e: any) {
        console.log(e);
        if (e.response && (e.response.status === 401 || e.response.status === 400)) {
          setErrorMessage("Email or password are incorrect");
          setOpenSnackbar(true);
        }
      }
    },
  });

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              fullWidth
              label="Full Name"
              variant="outlined"
              {...formik.getFieldProps("fullName")}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              sx={{
                marginBottom: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiOutlinedInput-root": {
                  borderColor: "#d0d0d0",
                },
                "&:hover .MuiOutlinedInput-root": {
                  borderColor: "#FF80AB", // צבע שדה טקסט על hover
                },
              }}
            />
            <TextField
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                marginBottom: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiOutlinedInput-root": {
                  borderColor: "#d0d0d0",
                },
                "&:hover .MuiOutlinedInput-root": {
                  borderColor: "#FF80AB", // צבע שדה טקסט על hover
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#FF80AB",
                color: "white",
                textTransform: "none",
                padding: "10px 0",
                "&:hover": {
                  backgroundColor: "#D81B60", // צבע בהיר יותר בהובר
                },
              }}
            >
              Update
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Snackbar להודעות שגיאה */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #d0d0d0", // גבולות עדינים
  borderRadius: 2, // פינות מעוגלות
  boxShadow: 24,
  p: 4,
};

export default Update;
