// import { AppBar, Box,  Toolbar } from "@mui/material"
// import { Link } from "react-router"
// const NavBar=()=>{

// return(<>
//   <AppBar
//       position="fixed"
//       sx={{
//         top: 5,
//         right: 5,
//         width: "auto",
//         background: "linear-gradient(90deg,rgb(88, 242, 183),rgb(243, 96, 196))", // מעבר צבעים
//         borderRadius: 2,
//       }}
//     >
//       <Toolbar sx={{ padding: "0 10px" }}>
//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Link to='/connect' style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Connect</Link>|
//           <Link to='/home' style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Home</Link> |
//           <Link to='/allChallenges' style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Challenges</Link>|
//         </Box>
//       </Toolbar>
//     </AppBar>
// </>)

// }
// export default NavBar



// // import { AppBar, Toolbar, Box, Button, IconButton, Typography } from "@mui/material";
// //  import { Link } from "react-router"
// // import { AccountCircle, Logout, Login, PersonAdd, Edit } from "@mui/icons-material";
// // import { useState } from "react";
// // import UserNameAvatar from "./User/userNameAvatar";

// // const NavBar = ({ isAuthenticated, onLogout }: { isAuthenticated: boolean; onLogout: () => void }) => {
// //   return (
// //     <AppBar position="sticky" sx={{ background: "linear-gradient(135deg, #00C9FF, #92FE9D)", padding: "0 20px" }}>
// //       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
// //         {/* ניווט */}
// //         <Box sx={{ display: "flex", gap: 3 }}>
// //           <Button component={Link} to="/" sx={navButtonStyle}>
// //             Home
// //           </Button>
// //           <Button component={Link} to="/allChallenges" sx={navButtonStyle}>
// //             Challenges
// //           </Button>
// //         </Box>

// //         {/* כפתורי משתמש */}
// //         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// //           {isAuthenticated ? (
// //             <>
// //               <UserNameAvatar />
// //               <IconButton onClick={onLogout} color="inherit">
// //                 <Logout />
// //               </IconButton>
// //               <IconButton component={Link} to="/updateProfile" color="inherit">
// //                 <Edit />
// //               </IconButton>
// //             </>
// //           ) : (
// //             <>
// //               <Button startIcon={<Login />} component={Link} to="/login" sx={navButtonStyle}>
// //                 Login
// //               </Button>
// //               <Button startIcon={<PersonAdd />} component={Link} to="/register" sx={navButtonStyle}>
// //                 Register
// //               </Button>
// //             </>
// //           )}
// //         </Box>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // const navButtonStyle = {
// //   color: "white",
// //   fontWeight: "bold",
// //   textTransform: "none",
// //   "&:hover": { color: "#f5f5f5" },
// // };

// // export default NavBar;



// // import { AppBar, Toolbar, Box, Button, IconButton, Typography } from "@mui/material";
// // import { Link } from "react-router-dom"; // תיקון שגיאה
// // import { AccountCircle, Logout, Login, PersonAdd, Edit } from "@mui/icons-material";
// // import { useState } from "react";
// // import UserNameAvatar from "./User/userNameAvatar";

// // const NavBar = ({ isAuthenticated, onLogout }: { isAuthenticated: boolean; onLogout: () => void }) => {
// //   return (
// //     <AppBar position="sticky" sx={{ background: "linear-gradient(135deg, #00C9FF, #92FE9D)", top: 0, width: '100%', padding: "0 20px" }}>
// //       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
// //         {/* ניווט */}
// //         <Box sx={{ display: "flex", gap: 3 }}>
// //           <Button component={Link} to="/" sx={navButtonStyle}>
// //             Home
// //           </Button>
// //           <Button component={Link} to="/allChallenges" sx={navButtonStyle}>
// //             Challenges
// //           </Button>
// //         </Box>

// //         {/* כפתורי משתמש */}
// //         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// //           {isAuthenticated ? (
// //             <>
// //               <UserNameAvatar />
// //               <IconButton onClick={onLogout} color="inherit">
// //                 <Logout />
// //               </IconButton>
// //               <IconButton component={Link} to="/updateProfile" color="inherit">
// //                 <Edit />
// //               </IconButton>
// //             </>
// //           ) : (
// //             <>
// //               <Button startIcon={<Login />} component={Link} to="/login" sx={navButtonStyle}>
// //                 Login
// //               </Button>
// //               <Button startIcon={<PersonAdd />} component={Link} to="/register" sx={navButtonStyle}>
// //                 Register
// //               </Button>
// //             </>
// //           )}
// //         </Box>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // const navButtonStyle = {
// //   color: "white",
// //   fontWeight: "bold",
// //   textTransform: "none",
// //   "&:hover": { color: "#f5f5f5" },
// // };

// // export default NavBar;
///////////

// import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from "@mui/material";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";

// const pages = [ 'Connect','Home', 'Challenges'];
// const settings = ['Profile', 'Logout'];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="fixed" sx={{ background: "black", top: 0, right: 0, width: "100%", borderRadius: 2 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography
//             variant="h6"
//             component="a"
//             href="#home"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             AI BATTLE
//           </Typography>

//           {/* תפריט נפתח למובייל */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* קישורים לדפים */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             {pages.map((page) => (
//               <Button key={page} component={Link} to={`/${page.toLowerCase()}`} sx={{ color: "rgba(255, 64, 129, 0.8)", textTransform: "none", fontWeight: "bold" ,fontSize:"18px"}}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* אייקון משתמש */}
//           <Box sx={{ flexGrow: 0 }}>
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar alt="User" src="/path/to/user/avatar.jpg" />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElUser}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//               sx={{ mt: "45px" }}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default NavBar;


////////////

// import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from "@mui/material";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import md5 from "md5"; // יש להתקין את md5 עם npm install md5

// const pages = ['Connect', 'Home', 'Challenges'];
// const settings = ['Profile', 'Logout'];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//   const [userEmail, setUserEmail] = useState<string | null>("user@example.com"); // פה תוכל להכניס את המייל של המשתמש

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   // יצירת כתובת URL לתמונת Gravatar על פי המייל
//   const gravatarUrl = userEmail
//     ? `https://www.gravatar.com/avatar/${md5(userEmail.trim().toLowerCase())}?s=200&d=mp`
//     : "";

//   return (
//     <AppBar position="fixed" sx={{ background: "black", top: 0, right: 0, width: "100%", borderRadius: 2 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography
//             variant="h6"
//             component="a"
//             href="#home"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             AI BATTLE
//           </Typography>

//           {/* תפריט נפתח למובייל */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* קישורים לדפים */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             {pages.map((page) => (
//               <Button key={page} component={Link} to={`/${page.toLowerCase()}`} sx={{ color: "rgba(255, 64, 129, 0.8)", textTransform: "none", fontWeight: "bold", fontSize: "18px" }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* אייקון משתמש */}
//           <Box sx={{ flexGrow: 0 }}>
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar alt="User" src={userEmail ? gravatarUrl : undefined} />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElUser}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//               sx={{ mt: "45px" }}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default NavBar;

// import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from "@mui/material";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import md5 from "md5";
// import { getUserEmailByToken, getUserNameByToken } from "./store/getFromToken";
// import Update from "./User/update";
// const pages = ['Connect', 'Home', 'Challenges'];
// const settings = ['Profile', 'Logout'];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//   const [hasImageError, setHasImageError] = useState(false);
//   const [isUpdate, setIsUpdate] = useState(false);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
// const userEmail=getUserEmailByToken()
// const userName=getUserNameByToken()
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };
// const token=sessionStorage.getItem('token')
//   const handleCloseUserMenu = (setting:string) => {
//     setAnchorElUser(null);
//     if(setting=='Logout')
//       handleLogout()
//     else if(token!=null)
//     setIsUpdate(true)
//   };
//   const handleLogout = () => {
//     sessionStorage.removeItem('token');
//   };

//   const gravatarUrl = userEmail
//   ? `https://www.gravatar.com/avatar/${md5(userEmail.trim().toLowerCase())}?s=200&d=identicon`
//   : "";
//   console.log("Gravatar URL:", gravatarUrl);

//   return (
//     <AppBar position="fixed" sx={{ background: "black", top: 0, right: 0, width: "100%", borderRadius: 2 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography
//             variant="h6"
//             component="a"
//             href="#home"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
           
//             <img
//     src="../../public/assets/logo2.jpg"
//     alt="AI BATTLE Logo"
//     style={{ height: "50px" }} 
//   />
//           </Typography>

//           {/* תפריט נפתח למובייל */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* קישורים לדפים */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             {pages.map((page) => (
//               <Button key={page} component={Link} to={`/${page.toLowerCase()}`} sx={{ color: "rgba(255, 64, 129, 0.8)", textTransform: "none", fontWeight: "bold", fontSize: "18px" }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* אייקון משתמש */}
//           <Box sx={{ flexGrow: 0 }}>
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar
//                 alt={userName || "User"}
//                 src={!hasImageError ? gravatarUrl : undefined} 
//                 onError={() => setHasImageError(true)}
//               >
//                 {hasImageError && userName ? userName.charAt(0).toUpperCase() : ""}
//               </Avatar>
//             </IconButton>
//             <Menu
//               anchorEl={anchorElUser}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//               sx={{ mt: "45px" }}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
// {isUpdate&&<Update/>}
//     </AppBar>
    
//   );      
// };

// export default NavBar;

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import md5 from "md5";
import { getUserEmailByToken, getUserNameByToken } from "./store/getFromToken";
import Update from "./User/update";

const pages = ['Connect', 'Home', 'Challenges'];
const settings = ['Profile', 'Logout'];

const NavBar = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [hasImageError, setHasImageError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const userEmail = getUserEmailByToken();
  const userName = getUserNameByToken();
  const token = sessionStorage.getItem('token');

  const handleCloseUserMenu = (setting: string) => {
    setAnchorElUser(null);
    if (setting === 'Logout') handleLogout();
    else if (token) setIsUpdate(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
  };

  const gravatarUrl = userEmail
    ? `https://www.gravatar.com/avatar/${md5(userEmail.trim().toLowerCase())}?s=200&d=identicon`
    : "";

  return (
    <AppBar position="fixed" sx={{ background: "black", top: 0, right: 0, width: "100%", borderRadius: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="a" href="#home" sx={{ mr: 2, fontFamily: "monospace", fontWeight: 700 }}>
            <img src="../../public/assets/logo2.jpg" alt="AI BATTLE Logo" style={{ height: "50px", position: "absolute",top:"8px",left:"30px" }} />
          </Typography>

          {/* קישורים לדפים */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => {
              const isActive = location.pathname === `/${page.toLowerCase()}`;
              return (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{
                    color: isActive ? "rgba(138, 140, 255, 0.8)" : "rgba(255, 64, 129, 0.8)", // כחול לעמוד פעיל, ורוד לאחרים
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                    "&:hover": { color: "rgba(138, 140, 255, 0.8)" }, // כחול-תכלת במעבר עכבר
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* אייקון משתמש */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar
                alt={userName || "User"}
                src={!hasImageError ? gravatarUrl : undefined}
                onError={() => setHasImageError(true)}
              >
                {hasImageError && userName ? userName.charAt(0).toUpperCase() : ""}
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {isUpdate && <Update />}
    </AppBar>
  );
};

export default NavBar;

