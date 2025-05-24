using Core.DTOs;
using Core.IRepositories;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class ChallengeRepository: IChallengeRepository
    {
        private readonly DataContext _context;
        public ChallengeRepository(DataContext context)
        {
            _context = context;

        }
        public async Task AddAsync(Challenge challenge)
        {
            await _context.Challenges.AddAsync(challenge);
            await _context.SaveChangesAsync();
        }
        public async Task<IEnumerable<Challenge>> GetAllChallenges()
        {
            return await _context.Challenges.ToListAsync();

        }
        public async Task<Challenge> GetByIdAsync(int id)
        {
            return await _context.Challenges.FirstOrDefaultAsync(c => c.ID == id);
        }

        public async Task<IEnumerable<Challenge>> GetChallengesByStatusAsync(EStatus status)
        {
            return await _context.Challenges
                .Where(c => c.Status == status)
                .ToListAsync();
        }

        public async Task UpdateAsync(Challenge challenge)
        {
            _context.Challenges.Update(challenge);
            await _context.SaveChangesAsync();
        }
        public async Task<List<Challenge>> GetExpiredChallengesAsync()
        {
            return await _context.Challenges
                .Where(c => c.EndDate <= DateTime.UtcNow && c.Status == EStatus.active && !c.IsWinnerEmailSent)
                .ToListAsync();
        }
        public async Task<Image?> GetTopImageByChallengeAsync(int challengeId)
        {
            return await _context.Images
                .Where(img => img.ChallengeId == challengeId)
                .OrderByDescending(img => img.CountVotes)
                .FirstOrDefaultAsync();
        }

        public async Task<int?> GetWinnerByTopImageAsync(int challengeId)
        {
            var topImage = await GetTopImageByChallengeAsync(challengeId);
            return topImage?.UserId;
        }
        public async Task<IEnumerable<ChallengeVotesDTO>> GetChallengeVotesAsync()
        {
            return await _context.Challenges
          .Select(c => new ChallengeVotesDTO
          {
              //Id = c.Id,
              Title = c.Title,
              Votes = _context.Images
                  .Where(i => i.ChallengeId == c.ID)
                  .Sum(i => i.CountVotes) // Assuming CountVotes holds the number of votes for each image
          })
          .ToListAsync();
        }

    }
}
