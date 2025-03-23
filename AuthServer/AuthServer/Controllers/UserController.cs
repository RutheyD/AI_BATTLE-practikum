using AutoMapper;
using Core.DTOs;
using Core.IServices;
using Core.Models;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Shared.Helpers;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AiBattle.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        public UserController(IUserService userService,IMapper mapper, IConfiguration configuration)
        {
            _userService = userService;
            _mapper = mapper;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            var users = await _userService.GetAllUsersAsync();
            //var usersDTO= new List<UserDTO>();
            //foreach (var user in users)
            //{
            //    usersDTO.Add(_mapper.Map<UserDTO>(user));
            //}
            //return Ok(usersDTO);
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserByIdAsync(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }
        [HttpGet("exists/{email}")]
        public async Task<IActionResult> CheckEmailExists(string email)
        {
            var exists = await _userService.EmailExistsAsync(email);
            return Ok(new { Exists = exists });
        }

        
        //public async Task<IActionResult> Login([FromBody] LoginRequest request)
        //{
        //    var token = await _userService.AuthenticateAsync(request.Email, request.Password);

        //    if (token == null)
        //    {
        //        return Unauthorized("Invalid email or password");
        //    }

        //    return Ok(new { Token = token });
        //}
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
        {
            Console.WriteLine("rutiiiiiiii");
            var user =await _userService.GetUserByEmailAsync(request.Email);

            if (user != null && PasswordHelper.VerifyPassword(request.Password, user.PasswordHash)&&!user.IsDeleted)  // תוודא שהסיסמה נכונה
            {
                // הפונקציה מייצרת את ה-JWT עם מזהה המשתמש, שם המשתמש, כתובת האימייל והתפקיד
                var token = JWTHelper.GenerateJwtToken(user.ID, user.Name, user.Email, user.Role.ToString());

                // מחזירים את ה-JWT ללקוח
                return Ok(new { Token = token });
            }

            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterRequestDTO user)
        { 
            if (user == null)
            {
                return BadRequest("Invalid data received.");
            }
            if (string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.PasswordHash))
            {
                return BadRequest("Email and Password are required.");
            }
            //if (!Enum.TryParse(user.Role, true, out ERole role))
            //{
            //    return BadRequest("Invalid role.");
            //}
            var newUser = _mapper.Map<User>(user);
            //newUser.Role = role;
           
            var userAdded = await _userService.AddUserAsync(newUser);
            if (!userAdded)
            {
                return BadRequest("User registration failed. Email may already exist.");
            }
            var token = JWTHelper.GenerateJwtToken(newUser.ID,newUser.Name, newUser.Email,newUser.Role.ToString());
            return Ok(new { Token = token });
        }
        //[HttpPost("register")]
        //public async Task<IActionResult> Register([FromBody] RegisterRequestDTO registerRequest)
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest("Invalid data.");

        //    // בדיקת אם האימייל כבר קיים במערכת
        //    var userExists = await _userService.EmailExistsAsync(registerRequest.Email);
        //    if (userExists)
        //        return BadRequest("Email is already taken.");

        //    // המרת ה-DTO למודל
        //    var user = _mapper.Map<User>(registerRequest);

        //    // רישום המשתמש ושמירה ב-DTO עם ה-TOKEN
        //    var token = await _userService.RegisterUserAsync(user);

        //    // החזרת ה-TOKEN כחלק מהתשובה
        //    return Ok(new { Token = token });
        //}
        [HttpPost("change-password/{id}")]
        public async Task<IActionResult> ChangePassword(int id, [FromBody] ChangePasswordDTO changePasswordDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var result = await _userService.ChangePasswordAsync(id, changePasswordDTO.OldPassword, changePasswordDTO.NewPassword);
            if (!result)
                return BadRequest("Incorrect old password or user not found.");

            return Ok("Password changed successfully.");
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateUserDTO updateUserDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var existingUser = await _userService.GetUserByIdAsync(id);
            if (existingUser == null)
                return NotFound("User not found.");

            // ביצוע המרה ב-API
            _mapper.Map(updateUserDTO, existingUser);

            var updatedUser = await _userService.UpdateUserAsync(existingUser);

            return Ok(updatedUser);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var result = await _userService.SoftDeleteUserAsync(id);
            if (!result)
                return NotFound("User not found.");

            return NoContent();
        }
    }
}
//++++++++++++++++++
//[HttpPost("register")]
//public async Task<IActionResult> Register([FromBody] RegisterRequestDTO request)
//{
//    // וידוא שהפרמטרים הם נכונים
//    if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
//    {
//        return BadRequest("Email and Password are required.");
//    }

//    // יצירת טוקן JWT לאחר רישום
//    var token = await _userService.RegisterUserAsync(request.Email, request.Password, request.Role);

//    return Ok(new { Token = token });
//}
//[HttpPost("register")]
//public async Task<IActionResult> Register([FromBody] RegisterRequestDTO registerRequest)
//{
//    // אם המידע לא תקין, מחזירים שגיאה
//    if (!ModelState.IsValid)
//        return BadRequest("Invalid data.");

//    // המרת ה-DTO ל-User באמצעות AutoMapper
//    var user = _mapper.Map<User>(registerRequest);

//    // רישום המשתמש
//    var newUser = await _userService.RegisterUserAsync(user);

//    if (newUser == null)
//        return BadRequest("Registration failed.");

//    return Ok(new { Token = newUser.Token });
//}