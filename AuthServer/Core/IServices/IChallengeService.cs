using Core.DTOs;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IServices
{
    public interface IChallengeService
    {
        Task<Challenge> CreateChallengeAsync(ChallengeDTO challengeDto);
        Task<IEnumerable<Challenge>> GetActiveChallengesAsync();
        Task<IEnumerable<Challenge>> GetAllChallenges();
        Task<IEnumerable<Challenge>> GetFinishedChallengesAsync();
        Task<Challenge> GetChallengeByIdAsync(int id);
        Task<Challenge> UpdateChallengeStatusAsync(int id);
         Task ProcessExpiredChallengesAsync();
        Task<IEnumerable<ChallengeVotesDTO>> GetChallengeVotesAsync();

    }
}
