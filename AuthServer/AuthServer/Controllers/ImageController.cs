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
        //[HttpGet("download/{id}")]
        //public async Task<IActionResult> DownloadImage(int id)
        //{
        //    var imageStream = await _imageService.DownloadImageAsync(id);
        //    if (imageStream == null)
        //        return NotFound();

        //    return File(imageStream, "image/png"); 
        //}
        [HttpGet("challenge/{challengeId}")]
        public async Task<IActionResult> GetImagesByChallenge(int challengeId)
        {
            var images = await _imageService.GetImagesByChallengeAsync(challengeId);
            var imageDTOs = _mapper.Map<List<ImageDTO>>(images);

            return Ok(imageDTOs);
        }
        //[HttpPost("upload")]
        //[Authorize]
        //public async Task<IActionResult> UploadImage([FromForm] UploadImageDTO uploadDto)
        //{
        //    //var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value); // זיהוי המשתמש המחובר
        //    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        //    if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out var userId))
        //    {
        //        return Unauthorized("User ID not found in token.");
        //    }

        //    if (uploadDto.File == null || uploadDto.File.Length == 0)
        //        return BadRequest("No file uploaded.");

        //    using (var stream = uploadDto.File.OpenReadStream())
        //    {
        //        var fileName = $"{userId}_{uploadDto.ChallengeId}_{Path.GetFileName(uploadDto.File.FileName)}";
        //        var image = await _imageService.UploadImageAsync(userId, uploadDto.ChallengeId, stream, fileName);
        //        var imageDTO = _mapper.Map<ImageDTO>(image);

        //        return Ok(imageDTO);
        //    }
        //}

        //[HttpGet("presigned-url")]
        //[Authorize]
        //public async Task<ActionResult> GetPresignedUrl([FromQuery] string fileName, [FromQuery] string contentType, [FromQuery] int challengeId)
        //{
        //    if (string.IsNullOrEmpty(fileName))
        //        return BadRequest("Missing file name");

        //    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
        //    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int userId))
        //        return Unauthorized("Invalid user ID");

        //    var canUploadImg = await _imageService.CanUploadImageAsync(userId,challengeId);
        //    if (!canUploadImg)
        //        return Forbid("User has not uploaded the image");
        //    var url = await _s3Service.GetPresignedUrlAsync(fileName, contentType);

        //    return Ok(new { url });
        //}
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
        //=======================================
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


        //    var topImageDto = _mapper.Map<ImageDTO>(topImage);

        //    return Ok(topImageDto);

        //}
        [HttpGet("top/challenge/{id}")]
        public async Task<IActionResult> GetTopImageByChallenge(int id)
        {
            var topImage = await _imageService.GetTopImageByChallengeAsync(id);

            if (topImage == null)
            {
                return NotFound("No top image found for this challenge.");
            }

            return Ok(topImage);
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
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteImage(int id)
        //{
        //    var image = await _imageService.DeleteImageAsync(id);
        //    if (image == null)
        //        return NotFound();

        //    return NoContent();
        //}
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteImage(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value); // קבלת ה-ID של המשתמש המחובר
            var isAdmin = User.IsInRole("Admin"); // בדיקה אם המשתמש הוא ADMIN

            var result = await _imageService.DeleteImageAsync(id, userId, isAdmin);
            if (!result)
                return Forbid(); 

            return NoContent();
        }
    }
}

