using Core.IRepositories;
using Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;
using Core.DTOs;
using Microsoft.EntityFrameworkCore;
using Shared.Helpers;
using System.Data;

namespace Service
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
       public async Task<List<User>> GetAllUsersAsync() { 


            return await _userRepository.GetAllUsersAsync();
             

        }
        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _userRepository.GetUserByEmailAsync(email);
        }
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }
        public async Task<bool> EmailExistsAsync(string email)
        {
            return await _userRepository.GetUserByEmailAsync(email) != null;
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            return await _userRepository.UpdateUserAsync(user);
        }
        //public async Task<User> GetUserByIdAsync(int userId)
        //{
        //    var user = await _userRepository.GetUserByIdAsync(userId);
        //    if (user == null)
        //        return null;


        //}
        //public async Task<string> RegisterUserAsync(string email, string password, string role)
        //{
        //    // 1. רישום משתמש במסד נתונים
        //    var user = await _userRepository.RegisterUserAsync(email, password, role);

        //    // 2. יצירת JWT Token למשתמש לאחר ההרשמה
        //    var token = JWTHelper.GenerateJwtToken(user.Id, user.Email, user.Role);

        //    return token;
        //}
        //public async Task<string> RegisterUserAsync(string name, string email, string password, string role)
        //{
        //    // המרת ה-role מ-string ל-enum
        //    if (!Enum.TryParse(role, true, out ERole userRole))
        //    {
        //        throw new ArgumentException("Invalid role provided.");  // אם ההמרה לא הצליחה, זורקים שגיאה
        //    }

        //    // רישום המשתמש
        //    var user = await _userRepository.RegisterUserAsync(name, email, password, userRole);

        //    // יצירת טוקן JWT לאחר רישום
        //    var token = JWTHelper.GenerateJwtToken(user.ID, user.Name, user.Email, userRole.ToString());

        //    return token;

        //}
        //public async Task<RegisterResponseDTO> RegisterUserAsync(User user)
        //{
        //    // רישום המשתמש
        //    var newUser = await _userRepository.RegisterUserAsync(user);

        //    // יצירת טוקן JWT
        //    var token = JWTHelper.GenerateJwtToken(newUser.ID, newUser.Name, newUser.Email, newUser.Role.ToString());

        //    // החזרת ה-DTO עם הטוקן שנוצר
        //    var userResponseDTO = new RegisterResponseDTO
        //    {
        //        Id = newUser.ID,
        //        Name = newUser.Name,
        //        Email = newUser.Email,
        //        Token = token
        //    };

        //    return userResponseDTO;
        //}
        public async Task<string> RegisterUserAsync(User user)
        {
            // רישום המשתמש
            var newUser = await _userRepository.RegisterUserAsync(user);

            // יצירת טוקן JWT
            var token = JWTHelper.GenerateJwtToken(newUser.ID, newUser.Name, newUser.Email, newUser.Role.ToString());

            // החזרת ה-DTO עם הטוקן שנוצר
            //var userResponseDTO = new RegisterResponseDTO
            //{
            //    Id = newUser.ID,
            //    Name = newUser.Name,
            //    Email = newUser.Email,
            //    Token = token
            //};

            return token;
        }
        public async Task<bool> AddUserAsync(User user)
        {
            if (user != null)
            {
                user.CreatedAt = DateTime.Now;
                if (await _userRepository.GetUserByEmailAsync(user.Email)!=null)
                {
                    return false; // Email already exists, do not add user
                }
                user.Role = ERole.User;
                user.PasswordHash = PasswordHelper.HashPassword(user.PasswordHash);
            }
            return await _userRepository.AddUserAsync(user);
        }
        public async Task<bool> ChangePasswordAsync(int id, string oldPassword, string newPassword)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            if (user == null || !PasswordHelper.VerifyPassword(oldPassword, user.PasswordHash))
                return false;

            user.PasswordHash = PasswordHelper.HashPassword(newPassword);
            await _userRepository.UpdateUserAsync(user);
            return true;
        }
        public async Task<bool> SoftDeleteUserAsync(int id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            if (user == null)
                return false;

            user.IsDeleted = true;
            await _userRepository.UpdateUserAsync(user);
            return true;
        }
    }
    
}
