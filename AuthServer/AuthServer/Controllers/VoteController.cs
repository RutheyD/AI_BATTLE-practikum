using AutoMapper;
using Core.DTOs;
using Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AiBattle.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : ControllerBase
    {

        private readonly IVoteService _voteService;
        private readonly IMapper _mapper;

        public VoteController(IVoteService voteService, IMapper mapper)
        {
            _voteService = voteService;
            _mapper = mapper;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> VoteImageAsync([FromBody] VoteDTO voteRequest)
        {
            //var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            //if (userIdClaim == null)
            //    return Unauthorized("User ID not found in token");

            //if (!int.TryParse(userIdClaim, out int userId))
            //    return BadRequest("Invalid user ID format");
            var canVote=await _voteService.IsSelfVotingAsync(voteRequest.ImageId,voteRequest.UserId);
            if (canVote)
            {
                return BadRequest("You cannot vote for your own image.");
            }
            var vote = await _voteService.VoteImageAsync(voteRequest.UserId, voteRequest.ImageId);

                if (vote == null)
                {
                    return BadRequest("User has already voted for this image.");
                }

                var voteDto = _mapper.Map<VoteDTO>(vote);

                return Ok(voteDto);
            
            
        }
        [Authorize]
        [HttpDelete("deleteVote")]
        public async Task<IActionResult> DeleteVote([FromBody] VoteDTO voteRequest)
        {
            var result = await _voteService.DeleteVoteAsync(voteRequest.UserId, voteRequest.ImageId);

            if (!result)
            {
                return NotFound("Vote not found."); 
            }

            return Ok("Vote deleted successfully."); 
        }
    }
}
