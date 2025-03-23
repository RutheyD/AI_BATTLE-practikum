﻿using Core.IRepositories;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using Shared.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

      
        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.ID == id && !u.IsDeleted);
        }
        public async Task<bool> AddUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            return await _context.SaveChangesAsync() > 0;
        }
        public async Task<User> UpdateUserAsync(User user)
        {
            var existingUser = await _context.Users.FindAsync(user.ID);
            if (existingUser == null)
                return null; // או לזרוק שגיאה

            _context.Entry(existingUser).CurrentValues.SetValues(user);
            await _context.SaveChangesAsync();
            return existingUser;
        }
        //public async Task<User> RegisterUserAsync(string name, string email, string password, ERole role)
        //{
        //    // הצפנת הסיסמה
        //    var hashedPassword = PasswordHelper.HashPassword(password);

        //    var user = new User
        //    {
        //        Name = name,
        //        Email = email,
        //        PasswordHash = hashedPassword,
        //        Role = role
        //    };

        //    _context.Users.Add(user);
        //    await _context.SaveChangesAsync();  // שמירה למסד נתונים

        //    return user;
        //}
        public async Task<User> RegisterUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();  // שמירה למסד נתונים
            return user;
        }
        //public void UpdateUser(User user, int ID);
        //public void DeleteUser(int id);
        //public void AddUser(User user);
    }
}
