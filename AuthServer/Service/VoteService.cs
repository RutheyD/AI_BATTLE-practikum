﻿using Core.IRepositories;
using Core.IServices;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Service
{
    public class VoteService: IVoteService
    {
        private readonly IVoteRepository _voteRepository;
        public VoteService(IVoteRepository voteRepository)
        {
            _voteRepository = voteRepository;  
        }
        public async Task<Vote> VoteImageAsync(int userId, int imageId)
        {
            return await _voteRepository.VoteImageAsync(userId, imageId);
        }
        public async Task<bool> DeleteVoteAsync(int userId, int imageId)
        {
            return await _voteRepository.DeleteVoteAsync(userId, imageId);
        }
        public async Task<bool> IsSelfVotingAsync(int imageId, int userId)
        {
            return await _voteRepository.IsSelfVotingAsync( imageId,userId);
        }

    }
}
