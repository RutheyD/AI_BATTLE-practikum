using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Core.IRepositories

{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int userId);
        Task<User> UpdateUserAsync(User user);
        Task<bool> AddUserAsync(User user);
        Task<User> GetUserByEmailAsync(string email);
         Task<User> RegisterUserAsync(User user);
 
    }
}
