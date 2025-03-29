using Core.DTOs;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IServices
{
    public interface IUserService
    {

        Task<List<User>> GetAllUsersAsync();
        Task<User> GetUserByEmailAsync(string email);
         Task<string> RegisterUserAsync(User user);
        Task<bool> EmailExistsAsync(string email);
        Task<User> GetUserByIdAsync(int id);
        Task<User> UpdateUserAsync(User user);
        Task<bool> SoftDeleteUserAsync(int id);
        Task<bool> AddUserAsync(User user);
        Task<bool> ChangePasswordAsync(int id, string oldPassword, string newPassword);
     

    }
}
