using Core.DTOs;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IRepositories
{
    public interface IImageRepository
    {
        Task<Image> AddImageAsync(Image image);
        Task<Image> GetImageByIdAsync(int id);
        Task<List<Image>> GetImagesByChallengeAsync(int challengeId);
        Task<int> GetUserIdByImageIdAsync(int imageId);

        Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId);
        Task<bool> DeleteImageAsync(int id);
        Task<bool> CanUploadImageAsync(int userId, int challengeId);
    }
}
