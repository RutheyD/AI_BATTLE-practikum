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
    public class ChallengeService : IChallengeService
    {
        private readonly IChallengeRepository _challengeRepository;
        private readonly IUserRepository _userRepository;
        private readonly IEmailService _emailService;
        public ChallengeService(IChallengeRepository challengeRepository, IEmailService emailService, IUserRepository userRepository)
        {
            _challengeRepository = challengeRepository;
            _emailService = emailService;
            _userRepository = userRepository;
        }
        public async Task<Challenge> CreateChallengeAsync(ChallengeDTO challengeDto)
        {
            var challenge = new Challenge
            {
                Title = challengeDto.Title,
                Description = challengeDto.Description,
                StartDate = DateTime.UtcNow,
                EndDate = DateTime.UtcNow.AddDays(7),
                Status = EStatus.active
            };

            await _challengeRepository.AddAsync(challenge);
            return challenge;
        }
        public async Task<IEnumerable<Challenge>> GetAllChallenges()
        {
            return await _challengeRepository.GetAllChallenges();

        }
        public async Task<IEnumerable<Challenge>> GetActiveChallengesAsync()
        {
            return await _challengeRepository.GetChallengesByStatusAsync(EStatus.active);
        }

        public async Task<IEnumerable<Challenge>> GetFinishedChallengesAsync()
        {
            return await _challengeRepository.GetChallengesByStatusAsync(EStatus.finished);
        }

        public async Task<Challenge> GetChallengeByIdAsync(int id)
        {
            return await _challengeRepository.GetByIdAsync(id);
        }

        public async Task<Challenge> UpdateChallengeStatusAsync(int id)
        {
            var challenge = await _challengeRepository.GetByIdAsync(id);
            if (challenge != null)
            {
                challenge.Status = EStatus.finished;
                await _challengeRepository.UpdateAsync(challenge);
            }
            return challenge;
        }
        public async Task ProcessExpiredChallengesAsync()
        {
            var expiredChallenges = await _challengeRepository.GetExpiredChallengesAsync();

            foreach (var challenge in expiredChallenges)
            {
                var winnerId = await _challengeRepository.GetWinnerByTopImageAsync(challenge.ID);
                var winner = await _userRepository.GetUserByIdAsync((int)winnerId);
                if (winner == null) continue;

                var subject = "You won the challenge!";
                var body = $"Congratulations {winner.Name}! You won the challenge '{challenge.Title}' 🎉";

                await _emailService.SendEmailAsync(winner.Email, subject, body);

                challenge.Status = EStatus.finished;
                challenge.IsWinnerEmailSent = true;
                await _challengeRepository.UpdateAsync(challenge);
            }

        }
        public async Task<IEnumerable<ChallengeVotesDTO>> GetChallengeVotesAsync()
        {
            return await _challengeRepository.GetChallengeVotesAsync();
        }
    }
}