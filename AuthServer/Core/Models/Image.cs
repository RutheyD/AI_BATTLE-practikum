using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class Image
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int ChallengeId { get; set; }
        public virtual Challenge Challenge { get; set; }
        public string ImageURL { get; set; }
        public DateTime UploadedAt { get; set; }
        public int CountVotes { get; set; }
        public string FileName { get; set; }


    }
}
