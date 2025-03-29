using Core.DTOs;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IServices
{
    public interface IImageService
    {
        Task<Image> GetImageByIdAsync(int id);
        Task<List<Image>> GetImagesByChallengeAsync(int challengeId);
        Task<bool> DeleteImageAsync(int id, int userId, bool isAdmin); 

        Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId);
        Task<Image> AddImageAsync(Image image);
        Task<bool> CanUploadImageAsync(int userId, int challengeId);
    }
}
