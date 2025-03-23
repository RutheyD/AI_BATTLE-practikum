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
        //Task<User> GetUserByIdAsync(int userId);
        Task<User> GetUserByEmailAsync(string email);
         Task<string> RegisterUserAsync(User user);
         //Task<RegisterResponseDTO> RegisterUserAsync(User user);
        Task<bool> EmailExistsAsync(string email);
        Task<User> GetUserByIdAsync(int id);
        Task<User> UpdateUserAsync(User user);
        Task<bool> SoftDeleteUserAsync(int id);
        Task<bool> AddUserAsync(User user);
        Task<bool> ChangePasswordAsync(int id, string oldPassword, string newPassword);
        //Task<UserDTO> UpdateUserAsync(int userId, UpdateUserDTO updateUserDTO);

        //Task<string> RegisterUserAsync(string name, string email, string password, string role);
        //public List<User> GetAllUsers();
        //public User GetById(int id);


        //public void UpdateUser(User user, int ID);
        //public void DeleteUser(int id);
        //public void AddUser(User user);

    }
}
