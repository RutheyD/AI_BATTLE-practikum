// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css'; // הוספת קובץ ה-CSS של FontAwesome

// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       <div style={footerContentStyle}>
//         <p>&copy; 2025 AI BATTLE. All Rights Reserved.</p>
//         <div style={socialLinksStyle}>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-facebook" style={iconStyle}></i>
//           </a>
//           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-youtube" style={iconStyle}></i>
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-twitter" style={iconStyle}></i>
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-instagram" style={iconStyle}></i>
//           </a>
//         </div>
//         {/* חתימת הזכויות */}
//         <p style={footerSignatureStyle}>
//           &copy; 2025 AI-BATTLE. כל הזכויות שמורות.
//         </p>
//       </div>
//     </footer>
//   );
// };

// const footerStyle: React.CSSProperties = {
//   backgroundColor: '#333',
//   color: 'white',
//   padding: '20px 0',
//   textAlign: 'center',
//   position: 'relative',
//   bottom: '0',
//   width: '100%',
// };

// const footerContentStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const socialLinksStyle = {
//   marginTop: '10px',
// };

// const iconStyle = {
//   fontSize: '30px',
//   margin: '0 15px',
//   color: 'white',
// };

// const footerSignatureStyle: React.CSSProperties = {
//   marginTop: '15px',
//   fontSize: '14px',
//   fontStyle: 'italic',
//   color: 'white',
// };

// export default Footer;
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // הוספת קובץ ה-CSS של FontAwesome

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; 2025 AI BATTLE. All Rights Reserved.</p>
        <div style={socialLinksStyle}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook" style={iconStyle}></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube" style={iconStyle}></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" style={iconStyle}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" style={iconStyle}></i>
          </a>
        </div>
        {/* חתימת הזכויות */}
        <p style={footerSignatureStyle}>
          &copy; 2025 AI-BATTLE. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const footerContentStyle: React.CSSProperties = {
  display: 'flex' as 'flex', // תוספת 'as flex'
  flexDirection: 'column' as 'column', // תוספת 'as column'
  justifyContent: 'center' as 'center', // תוספת 'as center'
  alignItems: 'center' as 'center', // תוספת 'as center'
};

const socialLinksStyle: React.CSSProperties = {
  marginTop: '10px',
};

const iconStyle: React.CSSProperties = {
  fontSize: '30px',
  margin: '0 15px',
  color: 'white',
};

const footerSignatureStyle: React.CSSProperties = {
  marginTop: '15px',
  fontSize: '14px',
  fontStyle: 'italic',
  color: 'white',
};

export default Footer;
