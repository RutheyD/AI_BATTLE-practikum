using Core.DTOs;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IRepositories
{
    public interface IChallengeRepository
    {
        Task AddAsync(Challenge challenge);
        Task<Challenge> GetByIdAsync(int id);
        Task<IEnumerable<Challenge>> GetChallengesByStatusAsync(EStatus status);
        Task UpdateAsync(Challenge challenge);
        Task<IEnumerable<Challenge>> GetAllChallenges();
        Task<List<Challenge>> GetExpiredChallengesAsync();

        Task<Image?> GetTopImageByChallengeAsync(int challengeId);

        Task<int?> GetWinnerByTopImageAsync(int challengeId);

        Task<IEnumerable<ChallengeVotesDTO>> GetChallengeVotesAsync();
    }
}
