using Core.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class WinnerRepository: IWinnerRepository
    {
        private readonly DataContext _context;
        public WinnerRepository(DataContext context)
        {
            _context = context;

        }
    }
}
