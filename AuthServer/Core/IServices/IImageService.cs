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
        //Task<Image> UploadImageAsync(int userId, int challengeId, Stream fileStream, string fileName);
        Task<Image> GetImageByIdAsync(int id);
        Task<List<Image>> GetImagesByChallengeAsync(int challengeId);
        //Task<Image> DeleteImageAsync(int id);
        Task<bool> DeleteImageAsync(int id, int userId, bool isAdmin); // עדכון מחיקה עם בקרת גישה

        //Task<Stream> DownloadImageAsync(int id);
        //Task<Image> GetTopImageByChallengeAsync(int challengeId);
        Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId);
        Task<Image> AddImageAsync(Image image);
        Task<bool> CanUploadImageAsync(int userId, int challengeId);
    }
}
