using Core.IRepositories;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Data.Repositories
{
    public class VoteRepository : IVoteRepository
    {
        private readonly DataContext _context;
        public VoteRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<Vote> VoteImageAsync(int userId, int imageId)
        {
            var existingVote = await _context.Votes
                .FirstOrDefaultAsync(v => v.UserId == userId && v.ImageId == imageId);

            if (existingVote != null)
            {
                return null;
            }

            var vote = new Vote
            {
                UserId = userId,
                ImageId = imageId,
                VoteDate = DateTime.UtcNow
            };

            await _context.Votes.AddAsync(vote);

            var image = await _context.Images.FirstOrDefaultAsync(i => i.ID == imageId);
            if (image != null)
            {
                image.CountVotes++;
                _context.Images.Update(image);
            }

            await _context.SaveChangesAsync();
            return vote;
        }
        public async Task<bool> DeleteVoteAsync(int userId, int imageId)
        {
            var vote = await _context.Votes
                            .FirstOrDefaultAsync(v => v.UserId == userId && v.ImageId == imageId);
            if (vote == null)
            {
                return false;
            }
            var image = await _context.Images.FirstOrDefaultAsync(i => i.ID == imageId);
            if (image != null)
            {
                image.CountVotes--;
                _context.Images.Update(image);
            }
            _context.Votes.Remove(vote);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> IsSelfVotingAsync(int imageId, int userId)
        {
            return await _context.Images
                .AnyAsync(i => i.ID == imageId && i.UserId == userId);
        }

    }
}
