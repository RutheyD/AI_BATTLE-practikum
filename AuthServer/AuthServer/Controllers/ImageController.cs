using AutoMapper;
using Core.DTOs;
using Core.IServices;
using Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service;
using System.Security.Claims;

namespace AiBattle.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {

        private readonly IImageService _imageService;
        private readonly IMapper _mapper;
        private readonly IS3Service _s3Service;


        public ImageController(IImageService imageService, IMapper mapper, IS3Service s3Service)
        {
            _imageService = imageService;
            _mapper = mapper;
            _s3Service = s3Service;
        }

        [HttpGet("challenge/{challengeId}")]
        public async Task<IActionResult> GetImagesByChallenge(int challengeId)
        {
            var images = await _imageService.GetImagesByChallengeAsync(challengeId);
            var imageDTOs = _mapper.Map<List<ImageDTO>>(images);

            return Ok(imageDTOs);
        }
        [HttpGet("GetUserIdByImageId/{imageId}")]
        public async Task<IActionResult> GetUserIdByImageIdAsync(int imageId)
        {
            var userId = await _imageService.GetUserIdByImageIdAsync(imageId);

            if (userId == null)
                return NotFound("Image not found or has no associated user.");

            return Ok(userId);
        }
        [HttpGet("presigned-url")]
        [Authorize]
        public async Task<ActionResult> GetPresignedUrl([FromQuery] string fileName, [FromQuery] string contentType, [FromQuery] int challengeId)
        {


            if (string.IsNullOrEmpty(fileName))
                return BadRequest("Missing file name");
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int userId))
                return Unauthorized("Invalid user ID");
            if (!await _imageService.CanUploadImageAsync(userId, challengeId))
                return Forbid("User has not uploaded the image");
            var url = await _s3Service.GetPresignedUrlAsync(fileName, contentType);
            return Ok(new { url });
        }
        [HttpGet("getUrl")]
        public async Task<IActionResult> GetDownloadUrl([FromQuery] string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
                return BadRequest("File name is required");

            var downloadUrl = await _s3Service.GetDownloadUrlAsync(fileName);
            return Ok(new { Url = downloadUrl });
        }
        [HttpPost("upload/image")]
        [Authorize]
        public async Task<ActionResult> UploadImageSuccessful([FromBody] ImageDTO image)
        {
            if (image == null)
                return BadRequest("Invalid image data");
            var imageDto = _mapper.Map<Image>(image);
            await _imageService.AddImageAsync(imageDto);

            return Ok(image);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetImageById(int id)
        {
            var image = await _imageService.GetImageByIdAsync(id);
            if (image == null)
                return NotFound();

            var imageDTO = _mapper.Map<ImageDTO>(image);
            return Ok(imageDTO);
        }

        //[HttpGet("top/challenge/{id}")]
        //public async Task<IActionResult> GetTopImageByChallenge(int id)
        //{
        //    var topImage = await _imageService.GetTopImageByChallengeAsync(id);

        //    if (topImage == null)
        //    {
        //        return NotFound("No top image found for this challenge.");
        //    }

        //    return Ok(topImage);
        //}
        [HttpGet("top/challenge/{ID}")]
        public async Task<IActionResult> GetTopImageByChallenge(int id)
        {
            Console.WriteLine($"🔍 Checking top image for challenge: {id}");

            var topImage = await _imageService.GetTopImageByChallengeAsync(id);

            if (topImage == null)
            {
                Console.WriteLine($"⚠️ No top image found for challenge {id}");
                return NotFound("No top image found for this challenge.");
            }

            Console.WriteLine($"✅ Found top image: {topImage.ID}");
            return Ok(topImage);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteImage(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var isAdmin = User.IsInRole("Admin");

            var result = await _imageService.DeleteImageAsync(id, userId, isAdmin);
            if (!result)
                return Forbid();

            return NoContent();
        }

    }
}

