using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class Winner
    {
       
        public int Id { get; set; }

        public int ChallengeId { get; set; } // קשר לאתגר
        public virtual Challenge Challenge { get; set; }

        public int ImageId { get; set; } // קשר לתמונה המנצחת
        public virtual Image Image { get; set; }
        public int UserId { get; set; } // מזהה המשתמש שזכה
        public virtual User User { get; set; }

        public DateTime WinDate { get; set; } // תאריך הזכייה
    }
}
 //public Guid ID { get; set; }
        //public Challenge Challenge { get; set; }
        //public Image Image { get; set; }
        //public User User { get; set; }
        //public DateTime WinDate { get; set; }