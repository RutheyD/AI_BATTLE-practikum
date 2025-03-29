import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import md5 from "md5";
import { getUserEmailByToken, getUserNameByToken } from "./store/getFromToken";
import Update from "./User/update";

const pages = ['Connect', 'Home', 'Challenges','Winners'];
const settings = ['Profile', 'Logout'];

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [hasImageError, setHasImageError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [gravatarUrl, setGravatarUrl] = useState<string>(""); 
  const userEmail = getUserEmailByToken();
  const userName = getUserNameByToken();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (userEmail) {
      setGravatarUrl(`https://www.gravatar.com/avatar/${md5(userEmail.trim().toLowerCase())}?s=200&d=identicon`);
    }
  }, [userEmail]); 

  const handleCloseUserMenu = (setting: string) => {
    setAnchorElUser(null);
    if (setting === 'Logout') handleLogout();
    else if (token) setIsUpdate(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/home');
  };

  return (
    <AppBar position="fixed" sx={{ background: "black", top: 0, right: 0, width: "100%", borderRadius: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="a" href="#home" sx={{ mr: 2, fontFamily: "monospace", fontWeight: 700 }}>
            <img src={`/assets/logo2.jpg`} alt="AI BATTLE Logo" style={{ height: "50px", position: "absolute",top:"8px",left:"30px" }} />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => {
              const isActive = location.pathname === `/${page.toLowerCase()}`;
              return (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{
                    color: isActive ? "rgba(138, 140, 255, 0.8)" : "rgba(255, 64, 129, 0.8)", 
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                    "&:hover": { color: "rgba(138, 140, 255, 0.8)" },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar
                alt={userName || "User"}
                src={gravatarUrl && !hasImageError ? gravatarUrl : undefined}
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
