// // import { useDispatch, useSelector } from "react-redux"
// // import { AppDispatch, RootState } from "../redux/store"
// // import { useEffect } from "react";
// // import { getChallenges } from "../redux/challengeSlice";
// // import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
// // import { Outlet, useNavigate } from "react-router";

// // const AllChallenges=()=>{
// // const dispatch=useDispatch<AppDispatch>();
// // const challengesList=useSelector((state:RootState)=>state.challenges.list);
// // const navigate = useNavigate();


// // useEffect(()=>{
// //     dispatch(getChallenges());
// //     console.log(challengesList.values);

// // },[dispatch]);


// // const handleNavigate = (challengeId:number) => {
// //     // navigate(`${challengeId}`); // Adjust the path as needed
// //     navigate(`/allChallenges/${challengeId}`);

// // };
// // return(<>
// //         <Typography variant="h4" sx={{ margin: 2 }}>
// //                 Challenges List
// //             </Typography>
// //             <List>
// //                 {Array.isArray(challengesList) && challengesList.length > 0 ? (
// //                     challengesList.map((challenge) => (
// //                         <ListItem key={challenge.id}> {/* Ensure this ID is unique */}
// //                             <ListItemText primary={challenge.title}/* secondary={challenge.description}*/ />
// //                             <Button 
// //                                 variant="contained" 
// //                                 onClick={() => handleNavigate(challenge.id)}
// //                                 sx={{ marginLeft: 2 }} // Add some spacing
// //                             >
// //                                 View Challenge
// //                             </Button>
// //                         </ListItem>
// //                     ))
// //                 ) : (
// //                     <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
// //                 )}
// //             </List>
// //             <Box>
// //             <Outlet/>
// //             </Box>

// // </>)
// // }
// // export default AllChallenges


// // import { useDispatch, useSelector } from "react-redux";
// // import { AppDispatch, RootState } from "../redux/store";
// // import { useEffect } from "react";
// // import { getChallenges } from "../redux/challengeSlice";
// // import { Box, Card, CardContent, Typography } from "@mui/material";
// // import { Outlet, useNavigate } from "react-router";

// // const AllChallenges = () => {
// //     const dispatch = useDispatch<AppDispatch>();
// //     const challengesList = useSelector((state: RootState) => state.challenges.list);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         dispatch(getChallenges());
// //         console.log(challengesList.values);
// //     }, [dispatch]);

// //     const handleNavigate = (challengeId: number) => {
// //         navigate(`/allChallenges/${challengeId}`);
// //     };

// //     return (
// //         <>
// //             <Typography variant="h4" sx={{ margin: 2 }}>
// //                 Challenges List
// //             </Typography>
// //             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
// //                 {Array.isArray(challengesList) && challengesList.length > 0 ? (
// //                     challengesList.map((challenge) => (
// //                         <Card
// //                             key={challenge.id}
// //                             sx={{
// //                                 display: "flex",
// //                                 flexDirection: "row",
// //                                 justifyContent: "space-between",
// //                                 alignItems: "center",
// //                                 padding: 2,
// //                                 cursor: "pointer",
// //                                 borderRadius: 2,
// //                                 boxShadow: 2,
// //                                 ":hover": {
// //                                     boxShadow: 6, // Give a hover effect
// //                                     transform: "scale(1.03)",
// //                                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                                 },
// //                             }}
// //                             onClick={() => handleNavigate(challenge.id)}
// //                         >
// //                             <CardContent sx={{ flex: 1 }}>
// //                                 <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
// //                                     {challenge.title}
// //                                 </Typography>
// //                                 <Typography variant="body2" color="text.secondary">
// //                                     {challenge.description}
// //                                 </Typography>
// //                             </CardContent>
// //                         </Card>
// //                     ))
// //                 ) : (
// //                     <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
// //                 )}
// //             </Box>
// //             <Box>
// //                 <Outlet />
// //             </Box>
// //         </>
// //     );
// // };

// // export default AllChallenges;


// // import { useDispatch, useSelector } from "react-redux";
// // import { AppDispatch, RootState } from "../redux/store";
// // import { useEffect } from "react";
// // import { getChallenges } from "../redux/challengeSlice";
// // import { Box, Card, CardContent, Typography } from "@mui/material";
// // import { Outlet, useNavigate } from "react-router";

// // const AllChallenges = () => {
// //     const dispatch = useDispatch<AppDispatch>();
// //     const challengesList = useSelector((state: RootState) => state.challenges.list);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         dispatch(getChallenges());
// //         console.log(challengesList.values);
// //     }, [dispatch]);

// //     const handleNavigate = (challengeId: number) => {
// //         navigate(`/allChallenges/${challengeId}`);
// //     };

// //     return (
// //         <>
// //             <Typography variant="h4" sx={{ margin: 2 }}>
// //                 Challenges List
// //             </Typography>
// //             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
// //                 {Array.isArray(challengesList) && challengesList.length > 0 ? (
// //                     challengesList.map((challenge) => (
// //                         <Card
// //                             key={challenge.id}
// //                             sx={{
// //                                 display: "flex",
// //                                 flexDirection: "column",
// //                                 padding: 3,
// //                                 cursor: "pointer",
// //                                 borderRadius: 2,
// //                                 border: "2px solid", // גבול רחב יותר
// //                                 borderColor: "#e91e63", // גבול ורוד
// //                                 boxShadow: 3,
// //                                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                                 ":hover": {
// //                                     boxShadow: 10,
// //                                     transform: "scale(1.05)", // אנימציה של זום
// //                                 },
// //                                 ":active": {
// //                                     transform: "scale(1.03)", // אנימציה של קטנה בעת לחיצה
// //                                 },
// //                                 maxWidth: "100%", // הכרטיס יתפוס כמעט את כל הרוחב
// //                             }}
// //                             onClick={() => handleNavigate(challenge.id)}
// //                         >
// //                             <CardContent>
// //                                 <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#9c27b0" }}>
// //                                     {challenge.title}
// //                                 </Typography>
// //                                 <Typography
// //                                     variant="body2"
// //                                     color="text.secondary"
// //                                     sx={{
// //                                         overflow: "hidden",
// //                                         whiteSpace: "nowrap",
// //                                         textOverflow: "ellipsis",
// //                                         maxWidth: "100%", // יוכל להתפשט לפי הצורך
// //                                     }}
// //                                 >
// //                                     {challenge.description}
// //                                 </Typography>
// //                             </CardContent>
// //                         </Card>
// //                     ))
// //                 ) : (
// //                     <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
// //                 )}
// //             </Box>
// //             <Box>
// //                 <Outlet />
// //             </Box>
// //         </>
// //     );
// // };

// // export default AllChallenges;


// // import { useDispatch, useSelector } from "react-redux";
// // import { AppDispatch, RootState } from "../redux/store";
// // import { useEffect } from "react";
// // import { getChallenges } from "../redux/challengeSlice";
// // import { Box, Card, CardContent, Typography, Avatar, Paper, Slider } from "@mui/material";
// // import { Outlet, useNavigate } from "react-router";

// // const AllChallenges = () => {
// //     const dispatch = useDispatch<AppDispatch>();
// //     const challengesList = useSelector((state: RootState) => state.challenges.list);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         dispatch(getChallenges());
// //         console.log(challengesList.values);
// //     }, [dispatch]);

// //     const handleNavigate = (challengeId: number) => {
// //         navigate(`/allChallenges/${challengeId}`);
// //     };

// //     return (
// //         <>
// //            <Typography 
// //     variant="h4" 
// //     sx={{ 
// //         left:"30px",
// //         margin: 2, 
// //         fontSize: "3rem", // גודל גדול יותר
// //         color: "#00bcd4", // צבע תכלת
// //         fontWeight: "bold", // להפוך את הגופן למודגש
// //         textAlign: "left", // יישר את הטקסט למרכז
// //     }}
// // >
// //    All Challenges 
// // </Typography>

// //             <Box sx={{ display: "flex", gap: 3 }}>
// //                 {/* Left side: Challenges */}
// //                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
// //                     {Array.isArray(challengesList) && challengesList.length > 0 ? (
// //                         challengesList.map((challenge) => (
// //                             <Card
// //                                 key={challenge.id}
// //                                 sx={{
// //                                     display: "flex",
// //                                     flexDirection: "row",
// //                                     padding: 3,
// //                                     cursor: "pointer",
// //                                     borderRadius: 2,
// //                                     border: "1px solid",
// //                                     borderColor: "#e91e63",
// //                                     boxShadow: 3,
// //                                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                                     ":hover": {
// //                                         boxShadow: 10,
// //                                         transform: "scale(1.05)",
// //                                     },
// //                                     ":active": {
// //                                         transform: "scale(1.03)",
// //                                     },
// //                                     maxWidth: "100%",
// //                                     justifyContent: "space-between", // התוכן יתפשט
// //                                     // alignItems: "center",
// //                                 }}
// //                                 onClick={() => handleNavigate(challenge.id)}
// //                             >
// //                                 {/* Avatar and Challenge Content */}
// //                                 <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// //                                     <Avatar 
// //                                         src="../../../public/assets/profile.jpg" 
// //                                         alt="Avatar" // תחליף בקישור לתמונה אמיתית
// //                                     />
// //                                     <Box>
// //                                         <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#9c27b0" }}>
// //                                             {challenge.title}
// //                                         </Typography>
// //                                         <Typography
// //                                             variant="body2"
// //                                             color="text.secondary"
// //                                             sx={{
// //                                                 overflow: "hidden",
// //                                                 whiteSpace: "nowrap",
// //                                                 textOverflow: "ellipsis",
// //                                                 maxWidth: "300px", // תיאור יתחלק אחרי 30 תווים
// //                                             }}
// //                                         >
// //                                             {challenge.description}
// //                                         </Typography>
// //                                     </Box>
// //                                 </CardContent>
// //                             </Card>
// //                         ))
// //                     ) : (
// //                         <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
// //                     )}
// //                 </Box>

// //                 {/* Right side: Sidebar */}
// //                 <Box
// //                     sx={{
// //                         right:"20px",
// //                         width: "300px",
// //                         height:"600px",
// //                         position: "fixed",
// //                         top: "150px",
// //                         padding: 2,
// //                         backgroundColor: "#9c27b0",
// //                         borderRadius: 2,
// //                         boxShadow: 3,
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         justifyContent: "space-between",
// //                     }}
// //                 >
// //                     {/* Image Carousel */}
// //                     <Box sx={{  left:"5px", flex: 1, overflow: "hidden", borderRadius: 2 }}>
// //                         <Slider
// //                             sx={{
// //                                 left:"5px",
// //                                 width: "100%",
// //                                 "& .MuiSlider-thumb": {
// //                                     display: "none", // להסתיר את ה-thumb של ה-slider
// //                                 },
// //                             }}
// //                             value={0}
// //                             min={0}
// //                             max={5}
// //                             valueLabelDisplay="auto"
// //                             valueLabelFormat={(value) => (
// //                                 <img
// //                                     // src={`https://via.placeholder.com/300x200?text=Image+${value}`}
// //                                      src={`../../../public/assets/brain.png`}
// //                                     alt={`Image ${value}`}
// //                                     style={{
// //                                         width: "100%",
// //                                         height: "auto",
// //                                         objectFit: "cover",
// //                                         borderRadius: "10px",
// //                                     }}
// //                                 />
// //                             )}
// //                         />
// //                     </Box>

// //                     {/* Sidebar Text */}
// //                     <Paper sx={{ padding: 2, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
// //                         <Typography variant="h6">
// //                             Come and join the fun! Take part in the next challenge!
// //                         </Typography>
// //                     </Paper>
// //                 </Box>
// //             </Box>
// //             <Box>
// //                 <Outlet />
// //             </Box>
// //         </>
// //     );
// // };

// // export default AllChallenges;



// // import { useDispatch, useSelector } from "react-redux";
// // import { AppDispatch, RootState } from "../redux/store";
// // import { useEffect } from "react";
// // import { getChallenges } from "../redux/challengeSlice";
// // import { Box, Card, CardContent, Typography, Avatar, Paper, Slider } from "@mui/material";
// // import { Outlet, useNavigate } from "react-router";

// // const AllChallenges = () => {
// //     const dispatch = useDispatch<AppDispatch>();
// //     const challengesList = useSelector((state: RootState) => state.challenges.list);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         dispatch(getChallenges());
// //     }, [dispatch]);

// //     const handleNavigate = (challengeId: number) => {
// //         navigate(`/allChallenges/${challengeId}`);
// //     };

// //     return (
// //         <>
// //             <Typography 
// //                 variant="h4" 
// //                 sx={{ 
// //                     top:"300px",
// //                     left:"30px",
// //                     margin: 2, 
// //                     fontSize: "3rem", 
// //                     color: "#00bcd4", 
// //                     fontWeight: "bold", 
// //                     textAlign: "left",
// //                 }}
// //             >
// //                 All Challenges 
// //             </Typography>

// //             <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
// //                 {/* Left side: Challenges */}
// //                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
// //                     {Array.isArray(challengesList) && challengesList.length > 0 ? (
// //                         challengesList.map((challenge) => (
// //                             <Card
// //                                 key={challenge.id}
// //                                 sx={{
// //                                     display: "flex",
// //                                     flexDirection: "row",
// //                                     padding: 3,
// //                                     cursor: "pointer",
// //                                     borderRadius: 2,
// //                                     border: "1px solid",
// //                                     borderColor: "#e91e63",
// //                                     boxShadow: 3,
// //                                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                                     ":hover": {
// //                                         boxShadow: 10,
// //                                         transform: "scale(1.05)",
// //                                     },
// //                                     ":active": {
// //                                         transform: "scale(1.03)",
// //                                     },
// //                                     maxWidth: "100%",
// //                                     justifyContent: "space-between", 
// //                                 }}
// //                                 onClick={() => handleNavigate(challenge.id)}
// //                             >

// //                                 {/* Avatar and Challenge Content */}
// //                                 <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// //                                     <Avatar 
// //                                         src="../../../public/assets/profile.jpg" 
// //                                         alt="Avatar" 
// //                                     />
// //                                     <Box>
// //                                         <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#9c27b0" }}>
// //                                             {challenge.title}
// //                                         </Typography>
// //                                         <Typography
// //                                             variant="body2"
// //                                             color="text.secondary"
// //                                             sx={{
// //                                                 overflow: "hidden",
// //                                                 whiteSpace: "nowrap",
// //                                                 textOverflow: "ellipsis",
// //                                                 maxWidth: "300px",
// //                                             }}
// //                                         >
// //                                             {challenge.description}
// //                                         </Typography>
// //                                     </Box>
// //                                 </CardContent>
// //                             </Card>
// //                         ))
// //                     ) : (
// //                         <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
// //                     )}
// //                 </Box>

// //                 {/* Right side: Sidebar */}
// //                 <Box
// //                     sx={{
// //                         right:"20px",
// //                         width: "300px",
// //                         height:"600px",
// //                         position: "fixed",
// //                         top: "150px",
// //                         padding: 2,
// //                         backgroundColor: "#9c27b0",
// //                         borderRadius: 2,
// //                         boxShadow: 3,
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         justifyContent: "space-between",
// //                     }}
// //                 >
// //                     {/* Image Carousel */}
// //                     <Box sx={{ left:"5px", flex: 1, overflow: "hidden", borderRadius: 2 }}>
// //                         <Slider
// //                             sx={{
// //                                 left:"5px",
// //                                 width: "100%",
// //                                 "& .MuiSlider-thumb": {
// //                                     display: "none", // להסתיר את ה-thumb של ה-slider
// //                                 },
// //                             }}
// //                             value={0}
// //                             min={0}
// //                             max={5}
// //                             valueLabelDisplay="auto"
// //                             valueLabelFormat={(value) => (
// //                                 <img
// //                                     src={`../../../public/assets/brain.png`}
// //                                     alt={`Image ${value}`}
// //                                     style={{
// //                                         width: "100%",
// //                                         height: "auto",
// //                                         objectFit: "cover",
// //                                         borderRadius: "10px",
// //                                     }}
// //                                 />
// //                             )}
// //                         />
// //                     </Box>

// //                     {/* Sidebar Text */}
// //                     <Paper sx={{ padding: 2, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
// //                         <Typography variant="h6">
// //                             Come and join the fun! Take part in the next challenge!
// //                         </Typography>
// //                     </Paper>
// //                 </Box>
// //             </Box>
// //             <Box>
// //                 <Outlet />
// //             </Box>
// //         </>
// //     );
// // };

// // export default AllChallenges;



// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
// import { useEffect } from "react";
// import { getChallenges } from "../redux/challengeSlice";
// import { Box, Card, CardContent, Typography, Avatar, Paper, Slider } from "@mui/material";
// import { Outlet, useNavigate } from "react-router";

// const AllChallenges = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const challengesList = useSelector((state: RootState) => state.challenges.list);
//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(getChallenges());
//     }, [dispatch]);

//     const handleNavigate = (challengeId: number) => {
//         navigate(`/allChallenges/${challengeId}`);
//     };

//     return (
//         <>
//             <Typography 
//                 variant="h4" 
//                 sx={{ 
//                     marginLeft: 2, 
//                     marginTop: 2, 
//                     fontSize: "3rem", 
//                     color: "#00bcd4", 
//                     fontWeight: "bold", 
//                     textAlign: "left"
//                 }}
//             >
//                 All Challenges 
//             </Typography>

//             <Box sx={{ display: "flex", width: "100%", height: "100vh", gap: 3 }}>
//                 {/* Left side: Challenges */}
//                 <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
//                     {Array.isArray(challengesList) && challengesList.length > 0 ? (
//                         challengesList.map((challenge) => (

//                             <Card
//                                 key={challenge.id}
//                                 sx={{
//                                     display: "flex",
//                                     flexDirection: "row",
//                                     padding: 3,
//                                     cursor: "pointer",
//                                     borderRadius: 2,
//                                     border: "1px solid",
//                                     borderColor: "#e91e63",
//                                     boxShadow: 3,
//                                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                                     ":hover": {
//                                         boxShadow: 10,
//                                         transform: "scale(1.05)",
//                                     },
//                                     ":active": {
//                                         transform: "scale(1.03)",
//                                     },
//                                     maxWidth: "100%",
//                                     justifyContent: "space-between"
//                                 }}
//                                 onClick={() => handleNavigate(challenge.id)}
//                             >
//                                 <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                                     <Avatar src="../../../public/assets/profile.jpg" alt="Avatar" />
//                                     <Box>
//                                         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#9c27b0" }}>
//                                             {challenge.title}
//                                         </Typography>
//                                         <Typography
//                                             variant="body2"
//                                             color="text.secondary"
//                                             sx={{
//                                                 overflow: "hidden",
//                                                 whiteSpace: "nowrap",
//                                                 textOverflow: "ellipsis",
//                                                 maxWidth: "300px",
//                                             }}
//                                         >
//                                             {challenge.description}
//                                         </Typography>
//                                     </Box>
//                                 </CardContent>
//                             </Card>
//                         ))
//                     ) : (
//                         <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
//                     )}
//                 </Box>

//                 {/* Right side: Sidebar */}
//                 <Box
//                     sx={{
//                         flex: 1,
//                         padding: 2,
//                         backgroundColor: "#9c27b0",
//                         borderRadius: 2,
//                         boxShadow: 3,
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "space-between",
//                         height: "50%"
//                     }}
//                 >
//                     <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 2 }}>
//                         <Slider
//                             sx={{
//                                 width: "100%",
//                                 "& .MuiSlider-thumb": {
//                                     display: "none",
//                                 },
//                             }}
//                             value={0}
//                             min={0}
//                             max={5}
//                             valueLabelDisplay="auto"
//                             valueLabelFormat={(value) => (
//                                 <img
//                                     src={`../../../public/assets/brain.png`}
//                                     alt={`Image ${value}`}
//                                     style={{
//                                         width: "100%",
//                                         height: "auto",
//                                         objectFit: "cover",
//                                         borderRadius: "10px",
//                                     }}
//                                 />
//                             )}
//                         />
//                     </Box>

//                     <Paper sx={{ padding: 2, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
//                         <Typography variant="h6">
//                             Come and join the fun! Take part in the next challenge!
//                         </Typography>
//                     </Paper>
//                 </Box>
//             </Box>
//             <Box>
//                 <Outlet />
//             </Box>
//         </>
//     );
// };

// export default AllChallenges;



// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
// import { useEffect } from "react";
// import { getChallenges } from "../redux/challengeSlice";
// import { Box, Card, CardContent, Typography, Avatar, Paper, Slider } from "@mui/material";
// import { Outlet, useNavigate } from "react-router";
// import LockIcon from "@mui/icons-material/Lock";

// const AllChallenges = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const challengesList = useSelector((state: RootState) => state.challenges.list);
//     const navigate = useNavigate();
//     const currentDate = new Date();
//     const sortedChallenges = [...challengesList].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

//     useEffect(() => {
//         dispatch(getChallenges());
//     }, [dispatch]);

//     const handleNavigate = (challengeId: number) => {
//         navigate(`/allChallenges/${challengeId}`);
//     };

//     return (
//         <>
//             {/* <Typography
//                 variant="h4"
//                 sx={{
//                     marginLeft: 3,
//                     marginTop: 3,
//                     // fontSize: "3rem",
//                     color: "#00bcd4",
//                     // fontWeight: "bold",
//                     textAlign: "left"
//                 }}
//             >
//                 All Challenges
//             </Typography> */}

//             <Box sx={{ display: "flex", width: "100%", height: "100vh", gap: 4, padding: 2 }}>
//                 {/* Left side: Challenges */}
//                 <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
//                     {Array.isArray(sortedChallenges) && sortedChallenges.length > 0 ? (
//                         sortedChallenges.map((challenge) => {
//                             const isExpired = new Date(challenge.endDate) < currentDate;
//                             return (
//                                 <Card
//                                     key={challenge.id}
//                                     sx={{
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         padding: 3,
//                                         cursor: "pointer",
//                                         borderRadius: 2,
//                                         border: "1px solid",
//                                         borderColor: "#e91e63",
//                                         boxShadow: 3,
//                                         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                                         ":hover": {
//                                             boxShadow: 10,
//                                             transform: "scale(1.05)",
//                                         },
//                                         ":active": {
//                                             transform: "scale(1.03)",
//                                         },
//                                         maxWidth: "100%",
//                                         justifyContent: "space-between",
//                                         position: "relative"
//                                     }}
//                                     onClick={() => handleNavigate(challenge.id)}
//                                 >
//                                     {isExpired && (
//                                         <LockIcon
//                                             sx={{
//                                                 position: "absolute",
//                                                 top: 10,
//                                                 right: 10,
//                                                 color: "#e91e63",
//                                                 fontSize: 40,
//                                             }}
//                                         />
//                                     )}

//                                     <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                                         <Avatar src="../../../public/assets/profile.jpg" alt="Avatar" />
//                                         <Box>
//                                             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#9c27b0" }}>
//                                                 {challenge.title}
//                                             </Typography>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="text.secondary"
//                                                 sx={{
//                                                     overflow: "hidden",
//                                                     whiteSpace: "nowrap",
//                                                     textOverflow: "ellipsis",
//                                                     maxWidth: "300px",
//                                                 }}
//                                             >
//                                                 {challenge.description}
//                                             </Typography>
//                                         </Box>
//                                          <Typography
//                                                 variant="body2"
//                                                 color="text.secondary"
//                                                 sx={{

//                                                 }}
//                                             >
//                                               from:  {challenge.startDate}
//                                             </Typography> <Typography
//                                                 variant="body2"
//                                                 color="text.secondary"
//                                                 sx={{

//                                                 }}
//                                             >
//                                             till  :  {challenge.endDate}
//                                             </Typography>
//                                     </CardContent>
//                                 </Card>
//                             );
//                         })
//                     ) : (
//                         <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
//                     )}
//                 </Box>
//                 <Box
//                     sx={{
//                         flex: 1,
//                         padding: 3,
//                         backgroundColor: "#9c27b0",
//                         borderRadius: 2,
//                         boxShadow: 3,
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "space-between",
//                         height: "100%"
//                     }}
//                 >
//                     <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 2 }}>
//                         <Slider
//                             sx={{
//                                 width: "100%",
//                                 "& .MuiSlider-thumb": {
//                                     display: "none",
//                                 },
//                             }}
//                             value={0}
//                             min={0}
//                             max={5}
//                             valueLabelDisplay="auto"
//                             valueLabelFormat={(value) => (
//                                 <img
//                                     src={`../../../public/assets/brain.png`}
//                                     alt={`Image ${value}`}
//                                     style={{
//                                         width: "100%",
//                                         height: "auto",
//                                         objectFit: "cover",
//                                         borderRadius: "10px",
//                                     }}
//                                 />
//                             )}
//                         />
//                     </Box>

//                     <Paper sx={{ padding: 3, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
//                         <Typography variant="h6">
//                             Come and join the fun! Take part in the next challenge!
//                         </Typography>
//                     </Paper>
//                 </Box>
//             </Box>
//             <Box>
//                 <Outlet />
//             </Box>
//         </>
//     );
// };

// export default AllChallenges;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getChallenges } from "../redux/challengeSlice";
import { Box, Card, CardContent, Typography, Avatar, Paper, Slider } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import LockIcon from "@mui/icons-material/Lock";

const AllChallenges = () => {
    const dispatch = useDispatch<AppDispatch>();
    const challengesList = useSelector((state: RootState) => state.challenges.list);
    const navigate = useNavigate();
    const currentDate = new Date();
    const sortedChallenges = [...challengesList].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    useEffect(() => {
        dispatch(getChallenges());
    }, [dispatch]);

    const handleNavigate = (challengeId: number) => {
        navigate(`/allChallenges/${challengeId}`);
    };
    const formatDate = (date: string | Date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0'); // מוסיף אפס בהתחלה אם היום הוא פחות מ-10
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); // החודש הוא בין 0 ל-11, אז מוסיפים 1
        const year = d.getFullYear(); // שנה

        return `${day}-${month}-${year}`; // פורמט יום-חודש-שנה
    };



    return (
        <>
            <Box sx={{ display: "flex", width: "100%", height: "100vh", gap: 4, padding: 2, marginTop: '50px' }}>
                {/* Left side: Challenges */}
                <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
                    {Array.isArray(sortedChallenges) && sortedChallenges.length > 0 ? (
                        sortedChallenges.map((challenge) => {
                            const isExpired = new Date(challenge.endDate) < currentDate;
                            return (
                                <Card
                                    key={challenge.id}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 3,
                                        cursor: "pointer",
                                        borderRadius: 2,
                                        border: "0.5px solid",
                                        borderColor: "rgba(255, 168, 197, 0.8)",
                                        boxShadow: 3,
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        ":hover": {
                                            boxShadow: 10,
                                            transform: "scale(1.05)",
                                        },
                                        ":active": {
                                            transform: "scale(1.03)",
                                        },
                                        maxWidth: "100%",
                                        justifyContent: "space-between",
                                        position: "relative"
                                    }}
                                    onClick={() => handleNavigate(challenge.id)}
                                >
                                    {isExpired && (
                                        <LockIcon
                                            sx={{
                                                position: "absolute",
                                                top: 10,
                                                right: 10,
                                                color: "rgba(138, 140, 255, 0.8)",
                                                fontSize: 40,
                                            }}
                                        />
                                    )}
    
                                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar src="../../../public/assets/profile.jpg" alt="Avatar" />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "rgba(255, 64, 129, 0.8)" }}>
                                                {challenge.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    overflow: "hidden",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                    maxWidth: "300px",
                                                }}
                                            >
                                                {challenge.description}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: "inline", // שומר על הצג כטקסט באורך שורה אחת
                                                fontWeight: 'bold', // עיצוב בולט למילים בלבד
                                            }}
                                        >
                                            From:
                                        </Typography>
                                        {formatDate(challenge.startDate.toString())}
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: "inline", // שומר על הצג כטקסט באורך שורה אחת
                                                fontWeight: 'bold', // עיצוב בולט למילים בלבד
                                            }}
                                        >
                                            Till:
                                        </Typography>
                                        {formatDate(challenge.endDate.toString())}
    
                                    </CardContent>
                                </Card>
                            );
                        })
                    ) : (
                        <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        padding: 3,
                        backgroundColor: "#9c27b0",
                        borderRadius: 2,
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}
                >
                    <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 2 }}>
                        <Slider
                            sx={{
                                width: "100%",
                                "& .MuiSlider-thumb": {
                                    display: "none",
                                },
                            }}
                            value={0}
                            min={0}
                            max={5}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => (
                                <img
                                    src={`../../../public/assets/brain.png`}
                                    alt={`Image ${value}`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                />
                            )}
                        />
                    </Box>
    
                    <Paper sx={{ padding: 3, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
                        <Typography variant="h6">
                            Come and join the fun! Take part in the next challenge!
                        </Typography>
                    </Paper>
                </Box>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    );
    
};

export default AllChallenges;
