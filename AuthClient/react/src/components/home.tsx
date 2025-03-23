import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { getUserNameByToken } from './store/getFromToken';

const Home = () => {
  const navigate = useNavigate();
  const userName = getUserNameByToken()||null;
console.log("userName "+userName);

  return (
    <> 
      <div
        style={{
          backgroundColor: 'white', // רקע לבן
          height: '100vh', // גובה מלא של המסך
          position: 'relative', // מיקום יחסי
          padding: '40px 20px', // מרווחים פנימיים
          textAlign: 'center', // טקסט מיושר למרכז
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: '800px', 
            margin: '0 auto', 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // הצללה קלה
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#000', fontSize: '2.5rem' }}>
           {userName!=-1 ? `${userName}, welcome to AI Battle! 🚀🎨` : 'Welcome to AI Battle! 🚀🎨'}
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, color: '#000', fontSize: '1.8rem' }}>
            Where creativity meets AI innovation! 🧠✨
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.4rem', mb: 3, color: '#333' }}>
            🔥 Every week, a new **AI image challenge** is launched.  
            <br />🎨 **Registered users** can upload their AI-generated creations.  
            <br />📢 **Vote** for your favorite images and help decide the winner!  
            <br />🏆 The **winning image** will be announced, and the creator will receive a **special email notification**! 💌  
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffcc00' }}>
            Rules to keep it fair & fun! 🎯  
          </Typography>

          <Typography variant="body2" sx={{ fontSize: '1.2rem', color: '#333' }}>
            ✅ Your image must follow the **challenge theme**.  
            <br />❌ No duplicate uploads – **only one entry per user**.  
            <br />🚫 You **can't vote twice** for the same image!  
          </Typography>

          <Button variant="contained" color="primary" 
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
            onClick={() => { navigate(`/connect`); }}
          >
            Join the Battle Now! ⚔️
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
