using AutoMapper;
using Core.DTOs;
using Core.IServices;
using Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AiBattle.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChallengeController : ControllerBase
    {

        private readonly IChallengeService _challengeService;
        private readonly IMapper _mapper;

        public ChallengeController(IChallengeService challengeService, IMapper mapper)
        {
            _challengeService = challengeService;
            _mapper = mapper;
        }

        [HttpPost("create")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateChallenge([FromBody] ChallengeDTO challengeDto)
        {
            var challenge = await _challengeService.CreateChallengeAsync(challengeDto);
            var challengeResult = _mapper.Map<ChallengeDTO>(challenge);
            return Ok(challengeResult);
        }
        [HttpGet("challenges")]
        public async Task<IActionResult> GetAllChallenges()
        {
            var challenges = await _challengeService.GetAllChallenges();
            var challengeDtos = _mapper.Map<IEnumerable<ChallengeDTO>>(challenges);
            return Ok(challengeDtos);
        }
        [HttpGet("active")]
        public async Task<IActionResult> GetActiveChallenges()
        {
            var challenges = await _challengeService.GetActiveChallengesAsync();
            var challengeDtos = _mapper.Map<IEnumerable<ChallengeDTO>>(challenges);
            return Ok(challengeDtos);

        }

        [HttpGet("finished")]
        public async Task<IActionResult> GetFinishedChallenges()
        {

            var challenges = await _challengeService.GetFinishedChallengesAsync();
            return Ok(challenges);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetChallengeById(int id)
        {
            var challenge = await _challengeService.GetChallengeByIdAsync(id);
            if (challenge == null)
                return NotFound();

            var challengeDto = _mapper.Map<ChallengeDTO>(challenge);
            return Ok(challengeDto);
        }

        [HttpPut("{id}/update-status")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateChallengeStatus(int id)
        {
            var updatedChallenge = await _challengeService.UpdateChallengeStatusAsync(id);
            var challengeDto = _mapper.Map<ChallengeDTO>(updatedChallenge);
            return Ok(challengeDto);
        }
        [HttpPost("process-expired-challenges")]
        public async Task<IActionResult> ProcessExpiredChallenges()
        {
            await _challengeService.ProcessExpiredChallengesAsync();
            return Ok("Expired challenges processed successfully.");
        }

        [HttpGet("getChallengeVotes")]
        public async Task<ActionResult<IEnumerable<ChallengeVotesDTO>>> GetChallengeVotes()
        {
            var challengesVoteList = await _challengeService.GetChallengeVotesAsync();
            return Ok(challengesVoteList);
        }
    }
}
