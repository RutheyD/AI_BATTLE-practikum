using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTOs
{
  
        public class TopImageDTO
        {
            public int ID { get; set; }
            public int UserId { get; set; }
            public string UserName { get; set; }  // שם המשתמש (המנצח)
            public string ChallengeName { get; set; }  // שם האתגר
            public string ImageUrl { get; set; }
            public int CountVotes { get; set; }
            public string FileName { get; set; }

        }
    
}
