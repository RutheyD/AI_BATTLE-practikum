﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTOs
{
   public class RegisterRequestDTO
    {
        public string Name { get; set; } 
        public string PasswordHash { get; set; }     
        public string Email { get; set; }      
         
    }
}
