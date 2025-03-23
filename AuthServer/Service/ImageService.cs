using Core.DTOs;
using Core.IRepositories;
using Core.IServices;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;
        private readonly IS3Service _s3Service;

        public ImageService(IImageRepository imageRepository, IS3Service s3Service)
        {
            _imageRepository = imageRepository;
            _s3Service = s3Service;
        }
        //public async Task<Image> UploadImageAsync(int userId, int challengeId, Stream fileStream, string fileName)
        //{
        //    // העלאת התמונה ל-S3
        //    var imageUrl = await _s3Service.UploadFileAsync(fileStream, fileName);

        //    // יצירת אובייקט Image
        //    var image = new Image
        //    {
        //        UserId = userId,
        //        ChallengeId = challengeId,
        //        ImageURL = imageUrl,
        //        UploadedAt = DateTime.UtcNow
        //    };

        //    // שמירת התמונה בבסיס הנתונים
        //    return await _imageRepository.AddImageAsync(image);
        //}

        public async Task<Image> GetImageByIdAsync(int id)
        {
            return await _imageRepository.GetImageByIdAsync(id);
        }
        public async Task<List<Image>> GetImagesByChallengeAsync(int challengeId)
        {
            return await _imageRepository.GetImagesByChallengeAsync(challengeId);
        }
        //public async Task<Stream> DownloadImageAsync(int id)
        //{
        //    var image = await _imageRepository.GetImageByIdAsync(id);
        //    if (image == null) return null;

        //    return await _s3Service.DownloadFileAsync(image.ImageURL);
        //}

        public async Task<bool> DeleteImageAsync(int id, int userId, bool isAdmin)
        {
            var image = await _imageRepository.GetImageByIdAsync(id);
            if (image == null) return false;

            // בדיקה אם המשתמש הוא הבעלים של התמונה או ADMIN
            if (isAdmin || image.UserId == userId)
            {
                // מחיקה מה-S3
                await _s3Service.DeleteFileAsync(image.ImageURL);
                return await _imageRepository.DeleteImageAsync(id);
            }

            return false;
        }
        //public async Task<Image> GetTopImageByChallengeAsync(int challengeId)
        //{
        //    return await _imageRepository.GetTopImageByChallengeAsync(challengeId);
        //}
        public async Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId)
        {
            return await _imageRepository.GetTopImageByChallengeAsync(challengeId);
        }
        //public async Task<Image> DeleteImageAsync(int id)
        //{
        //    return await _imageRepository.DeleteImageAsync(id);
        //}
        public async Task<Image> AddImageAsync(Image image)
        {
            return await _imageRepository.AddImageAsync(image);
        }
        public async Task<bool> CanUploadImageAsync(int userId, int challengeId)
        {


            return await _imageRepository.CanUploadImageAsync( userId, challengeId);

        }
    }
}
