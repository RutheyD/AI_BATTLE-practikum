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
        //public async Task<Image> GetTopImageByChallengeAsync(int challengeId)
        //{
        //    var topImage = await _context.Images
        //   .Where(img => img.ChallengeId == challengeId)
        //   .OrderByDescending(img => img.CountVotes)
        //   .FirstOrDefaultAsync();  // מחזיר את התמונה הראשונה (הכי גבוהה)   
        //    return topImage;
        //}
        //public async Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId)
        //{
        //    //var user= await _context.Users.FindAsync(
        //    return await _context.Images
        //        .Where(img => img.ChallengeId == challengeId)
        //        .OrderByDescending(img => img.CountVotes)
        //        .Select(async img => new TopImageDTO
        //        {
        //            ID = img.ID,
        //            UserId = img.UserId,
        //            UserName = await _context.Users.FirstOrDefaultAsync(i=>i.ID==img.UserId).Name,
        //            ChallengeName = img.Challenge.Title,  // הוספת שם האתגר
        //            ImageUrl = img.ImageURL,
        //            CountVotes = img.CountVotes
        //        })
        //        .FirstOrDefaultAsync(); // מחזיר את התמונה עם הכי הרבה הצבעות
        //}
        public async Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId)
        {
            var topImage = await _context.Images
                .Where(img => img.ChallengeId == challengeId)
                .OrderByDescending(img => img.CountVotes)
                .FirstOrDefaultAsync(); // מחזיר את התמונה עם הכי הרבה הצבעות

            if (topImage == null)
                return null;

            var user = await _context.Users
                .Where(u => u.ID == topImage.UserId)
                .Select(u => new { u.ID, u.Name })
                .FirstOrDefaultAsync(); // מביאים רק את ה-ID והשם של המשתמש

            return new TopImageDTO
            {
                ID = topImage.ID,
                UserId = topImage.UserId,
                UserName = user?.Name ?? "Unknown", // אם לא נמצא משתמש, נכתוב "Unknown"
                ChallengeName = topImage.Challenge.Title, // הוספת שם האתגר
                ImageUrl = topImage.ImageURL,
                CountVotes = topImage.CountVotes,
                FileName=topImage.FileName

            };
        }

        public async Task<bool> CanUploadImageAsync(int userId, int challengeId)
        {
            var exists = await _context.Images.AnyAsync(i => i.UserId == userId && i.ChallengeId == challengeId);

            return !exists; // אם כבר יש תמונה, נחזיר false
        }
        //public async Task<Image> GetImageByIdAsync(int id)
        //{
        //    return await _context.Images.Include(i => i.User).Include(i => i.Challenge)
        //                                .FirstOrDefaultAsync(i => i.ID == id);
        //}

        //public async Task<Image> DeleteImageAsync(int id)
        //{
        //    var image = await _context.Images.FindAsync(id);
        //    if (image != null)
        //    {
        //        _context.Images.Remove(image);
        //        await _context.SaveChangesAsync();
        //    }
        //    return image;
        //}
    }
}
