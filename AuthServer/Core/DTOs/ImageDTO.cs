﻿using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTOs
{
    public class ImageDTO
    {
       
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ChallengeId { get; set; }
        public string ImageUrl { get; set; }
        public int CountVotes { get; set; }
        public string FileName { get; set; }

    }
}
