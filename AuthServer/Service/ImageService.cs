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


        public async Task<Image> GetImageByIdAsync(int id)
        {
            return await _imageRepository.GetImageByIdAsync(id);
        }
        public async Task<List<Image>> GetImagesByChallengeAsync(int challengeId)
        {
            return await _imageRepository.GetImagesByChallengeAsync(challengeId);
        }

        public async Task<bool> DeleteImageAsync(int id, int userId, bool isAdmin)
        {
            var image = await _imageRepository.GetImageByIdAsync(id);
            if (image == null) return false;

            if (isAdmin || image.UserId == userId)
            {
                await _s3Service.DeleteFileAsync(image.ImageURL);
                return await _imageRepository.DeleteImageAsync(id);
            }

            return false;
        }

        public async Task<TopImageDTO?> GetTopImageByChallengeAsync(int challengeId)
        {
            return await _imageRepository.GetTopImageByChallengeAsync(challengeId);
        }

        public async Task<Image> AddImageAsync(Image image)
        {
            return await _imageRepository.AddImageAsync(image);
        }
        public async Task<bool> CanUploadImageAsync(int userId, int challengeId)
        {


            return await _imageRepository.CanUploadImageAsync(userId, challengeId);

        }
    }
}
