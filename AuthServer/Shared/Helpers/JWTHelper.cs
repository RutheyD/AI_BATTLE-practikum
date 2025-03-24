//using Microsoft.IdentityModel.Tokens;
//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Security.Claims;
//using System.Text;
//using System.Threading.Tasks;

//namespace Shared.Helpers
//{
//    public class JWTHelper
//    {

//        private const string SecretKey = "ThisIsASuperSecretKeyThatShouldBeLongEnoughAndSecure";
//        public static string GenerateJwtToken(int userId, string username, string email, string role)
//        {
//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.ASCII.GetBytes(SecretKey);

//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new[]
//                {
//                new Claim(ClaimTypes.NameIdentifier, userId.ToString()),
//                new Claim(ClaimTypes.Name, username),
//                new Claim(ClaimTypes.Email, email),
//                new Claim(ClaimTypes.Role, role) // הוספת תפקיד
//            }),
//                Expires = DateTime.UtcNow.AddHours(5),
//                Issuer = "https://ai-battle.onrender.com",
//                Audience = "https://ai-battle.onrender.com", // הזמן תפוגה של 3 שעות
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//            };

//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            return tokenHandler.WriteToken(token);


//        }
//    }
//}


using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Shared.Helpers
{
    public class JWTHelper
    {
        public static string GenerateJwtToken(int userId, string username, string email, string role)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            // קבלת נתונים ממשתני סביבה
            var secretKey = Environment.GetEnvironmentVariable("JWT_SECRET")
                            ?? throw new InvalidOperationException("JWT_SECRET is not set");

            var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER") ?? "https://ai-battle.onrender.com";
            var audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE") ?? "https://ai-battle.onrender.com";

            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId.ToString()),
                    new Claim(ClaimTypes.Name, username),
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, role)
                }),
                Expires = DateTime.UtcNow.AddHours(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
