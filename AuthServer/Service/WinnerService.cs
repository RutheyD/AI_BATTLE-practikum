using Core.IRepositories;
using Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class WinnerService : IWinnerService
    {
        private readonly IWinnerRepository _winnerRepository;
        public WinnerService(IWinnerRepository winnerRepository)
        {
            _winnerRepository = winnerRepository;
        }
    }

}
