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

            var secretKey = Environment.GetEnvironmentVariable("JWT_KEY")
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
