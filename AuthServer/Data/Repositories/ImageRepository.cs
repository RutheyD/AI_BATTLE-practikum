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
    public class ImageRepository : IImageRepository
    {
        private readonly DataContext _context;
        public ImageRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Image> AddImageAsync(Image image)
        {
            _context.Images.Add(image);
            await _context.SaveChangesAsync();
            return image;
        }
        public async Task<Image> GetImageByIdAsync(int id)
        {
            return await _context.Images.Include(i => i.User).FirstOrDefaultAsync(i => i.ID == id);
        }
        public async Task<int> GetUserIdByImageIdAsync(int imageId)
        {
            return await _context.Images
                .Where(img => img.ID == imageId)
                .Select(img => img.UserId)
                .FirstOrDefaultAsync();
        }
        public async Task<List<Image>> GetImagesByChallengeAsync(int challengeId)
        {
            return await _context.Images
                .Where(i => i.ChallengeId == challengeId)
                .ToListAsync();
        }
        public async Task<bool> DeleteImageAsync(int id)
        {
            var image = await _context.Images.FindAsync(id);
            if (image == null) return false;

            _context.Images.Remove(image);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId)
        {
            var topImage = await _context.Images
                .Where(img => img.ChallengeId == challengeId)
                .OrderByDescending(img => img.CountVotes)
                .FirstOrDefaultAsync();

            if (topImage == null)
                return null;

            var user = await _context.Users
                .Where(u => u.ID == topImage.UserId)
                .Select(u => new { u.ID, u.Name })
                .FirstOrDefaultAsync();
            return new TopImageDTO
            {
                ID = topImage.ID,
                UserId = topImage.UserId,
                UserName = user?.Name ?? "Unknown",
                ChallengeName = topImage.Challenge.Title,
                ImageUrl = topImage.ImageURL,
                CountVotes = topImage.CountVotes,
                FileName = topImage.FileName

            };
        }

        public async Task<bool> CanUploadImageAsync(int userId, int challengeId)
        {
            var exists = await _context.Images.AnyAsync(i => i.UserId == userId && i.ChallengeId == challengeId);

            return !exists;
        }

    }
}
