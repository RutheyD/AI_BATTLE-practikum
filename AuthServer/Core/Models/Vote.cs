using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class Vote
    {
     
        public int Id { get; set; }

        public int UserId { get; set; } 
        public virtual User User { get; set; }

        public int ImageId { get; set; } 
        public virtual Image Image { get; set; }

        public DateTime VoteDate { get; set; } 
    }
}
