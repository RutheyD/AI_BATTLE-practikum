using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public enum EStatus
    {
       finished ,active
    }
    public class Challenge
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }= DateTime.Now;
        public DateTime EndDate { get; set; }
        public EStatus Status { get; set; }=EStatus.active;
        public bool IsWinnerEmailSent { get; set; } = false;
    }
}
