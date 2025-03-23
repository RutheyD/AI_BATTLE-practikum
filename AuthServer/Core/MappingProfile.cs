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
          

            //CreateMap<User, UserDTO>().ReverseMap();

            CreateMap<Image, ImageDTO>().ReverseMap();

            CreateMap<Challenge, ChallengeDTO>().ReverseMap();

            CreateMap< User,RegisterRequestDTO>().ReverseMap();
            //.ForMember(dest => dest.PasswordHash, opt => opt.MapFrom(src => PasswordHelper.HashPassword(src.Password)));  // הצפנת הסיסמה
            //.ForMember(dest => dest.Role, opt => opt.MapFrom(src => Enum.IsDefined(typeof(ERole), src.Role) ? (ERole)Enum.Parse(typeof(ERole), src.Role) : ERole.User));  // המרת Role מ-String ל-ERole

            CreateMap< User,UpdateUserDTO>().ReverseMap();
            CreateMap< Vote,VoteDTO>().ReverseMap();
               //.ForMember(dest => dest.PasswordHash, opt => opt.MapFrom(src => string.IsNullOrEmpty(src.Password) ? null : PasswordHelper.HashPassword(src.Password)))
               ////.ForMember(dest => dest.Role, opt => opt.MapFrom(src => Enum.IsDefined(typeof(ERole), src.Role) ? (ERole)Enum.Parse(typeof(ERole), src.Role) : ERole.User))
               //.ForAllMembers(opt => opt.Condition((src, dest, srcMember) => srcMember != null)); // לא לעדכן ערכים ריקים

        }
    }
}