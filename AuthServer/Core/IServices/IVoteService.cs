﻿using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IServices
{
    public interface IVoteService
    {
        Task<Vote> VoteImageAsync(int userId, int imageId);
        Task<bool> DeleteVoteAsync(int userId, int imageId);
        Task<bool> IsSelfVotingAsync(int imageId, int userId);

    }
}
