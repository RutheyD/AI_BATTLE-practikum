using AutoMapper;
using Core.DTOs;
using Core.Models;
using Shared.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
          
            CreateMap<Image, ImageDTO>().ReverseMap();

            CreateMap<Challenge, ChallengeDTO>().ReverseMap();

            CreateMap< User,RegisterRequestDTO>().ReverseMap();
            
            CreateMap< User,UpdateUserDTO>().ReverseMap();
            CreateMap< Vote,VoteDTO>().ReverseMap();
              
        }
    }
}