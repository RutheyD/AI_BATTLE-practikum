using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public enum ERole
    {
        Admin,User
    }
    public class User
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public ERole Role { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsDeleted { get; set; }

    }
}
