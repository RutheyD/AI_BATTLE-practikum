using AiBattle.API.Jobs;
using Core;
using Core.IRepositories;
using Core.IServices;
using Data;
using Data.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Service;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Description = "Bearer Authentication with JWT Token",
        Type = SecuritySchemeType.Http
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            new List<string>()
        }
    });
});
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IChallengeRepository, ChallengeRepository>();
builder.Services.AddScoped<IChallengeService, ChallengeService>();
builder.Services.AddScoped<IImageRepository, ImageRepository>();
builder.Services.AddScoped<IImageService, ImageService>();
builder.Services.AddScoped<IS3Service, S3Service>();
builder.Services.AddScoped<IVoteRepository, VoteRepository>();
builder.Services.AddScoped<IVoteService, VoteService>();
builder.Services.AddScoped<IEmailService, EmailService>();
//builder.Services.AddScoped<IWinnerRepository, WinnerRepository>();
//builder.Services.AddScoped<IWinnerService, WinnerService>();
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddHostedService<ChallengeExpirationJob>();
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(Environment.GetEnvironmentVariable("CONNECTIONSTRINGS_DEFAULTCONNECTION"),
    new MySqlServerVersion(new Version(8, 0, 41))));

//builder.Services.AddDbContext<DataContext>(options =>
//options.UseMySql(builder.Configuration["ConnectionStrings:DefaultConnection"],
//new MySqlServerVersion(new Version(8, 0, 41))));
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = Environment.GetEnvironmentVariable("JWT_ISSUER"),
            ValidAudience = Environment.GetEnvironmentVariable("JWT_AUDIENCE"),
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_KEY")))
        };
    });

//builder.Services.AddAuthentication(options =>
//{
//    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//})
//    .AddJwtBearer(options =>
//    {
//        options.TokenValidationParameters = new TokenValidationParameters
//        {
//            ValidateIssuer = true,
//            ValidateAudience = true,
//            ValidateLifetime = true,
//            ValidateIssuerSigningKey = true,
//            ValidIssuer = builder.Configuration["JWT:Issuer"],
//            ValidAudience = builder.Configuration["JWT:Audience"],
//            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
//        };
//    });

//builder.Services.AddCors();
builder.Services.AddCors();

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowSpecificOrigin",
//        builder => builder.WithOrigins("https://ai-battle-users.onrender.com", "http://localhost:4200")
//                          .AllowAnyHeader()
//                          .AllowAnyMethod());
//});

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowSpecificOrigin",
//        builder => builder.WithOrigins("https://ai-battle-users.onrender.com", "http://localhost:4200")
//                          .AllowAnyHeader()
//                          .AllowAnyMethod()
//                          .AllowCredentials());  // ����� ����� �-CORS �� ����������
//});
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAllOrigins",
//        builder => builder.AllowAnyOrigin()   // ����� ��� ������ ����
//                          .AllowAnyHeader()
//                          .AllowAnyMethod()
//                          .AllowCredentials());  // ����� ����� �-CORS �� ����������
//});


var app = builder.Build();



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());



app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();
//using AiBattle.API.Jobs;
//using Core;
//using Core.IRepositories;
//using Core.IServices;
//using Data;
//using Data.Repositories;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.IdentityModel.Tokens;
//using Microsoft.OpenApi.Models;
//using Service;
//using System;
//using System.Text;

//// ���� �� ������� ������ �������
//var config = new ConfigurationBuilder()
//    .SetBasePath(Directory.GetCurrentDirectory())
//    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
//    .AddEnvironmentVariables()
//    .Build();

//var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddControllers();
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen(options =>
//{
//    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//    {
//        Scheme = "Bearer",
//        BearerFormat = "JWT",
//        In = ParameterLocation.Header,
//        Name = "Authorization",
//        Description = "Bearer Authentication with JWT Token",
//        Type = SecuritySchemeType.Http
//    });
//    options.AddSecurityRequirement(new OpenApiSecurityRequirement
//    {
//        {
//            new OpenApiSecurityScheme
//            {
//                Reference = new OpenApiReference
//                {
//                    Id = "Bearer",
//                    Type = ReferenceType.SecurityScheme
//                }
//            },
//            new List<string>()
//        }
//    });
//});

//// ����� ��Repositories ���Services
//builder.Services.AddScoped<IUserRepository, UserRepository>();
//builder.Services.AddScoped<IUserService, UserService>();
//builder.Services.AddScoped<IChallengeRepository, ChallengeRepository>();
//builder.Services.AddScoped<IChallengeService, ChallengeService>();
//builder.Services.AddScoped<IImageRepository, ImageRepository>();
//builder.Services.AddScoped<IImageService, ImageService>();
//builder.Services.AddScoped<IS3Service, S3Service>();
//builder.Services.AddScoped<IVoteRepository, VoteRepository>();
//builder.Services.AddScoped<IVoteService, VoteService>();
//builder.Services.AddScoped<IEmailService, EmailService>();
//builder.Services.AddScoped<IWinnerRepository, WinnerRepository>();
//builder.Services.AddScoped<IWinnerService, WinnerService>();
//builder.Services.AddAutoMapper(typeof(MappingProfile));
//builder.Services.AddHostedService<ChallengeExpirationJob>();

//// ����� ����� �-MySQL
//builder.Services.AddDbContext<DataContext>(options =>
//    options.UseMySql(config["ConnectionStrings:DefaultConnection"],
//    new MySqlServerVersion(new Version(8, 0, 41))));

//// ����� ���� �� ��JWT Key
//var jwtKey = config["JWT:Key"];
//if (string.IsNullOrEmpty(jwtKey))
//{
//    throw new Exception("?? JWT Key is missing! Check appsettings.json or environment variables.");
//}

//// ����� Authentication �� JWT
//builder.Services.AddAuthentication(options =>
//{
//    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//})
//.AddJwtBearer(options =>
//{
//    options.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuer = true,
//        ValidateAudience = true,
//        ValidateLifetime = true,
//        ValidateIssuerSigningKey = true,
//        ValidIssuer = config["JWT:Issuer"],
//        ValidAudience = config["JWT:Audience"],
//        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
//    };
//});

//builder.Services.AddCors();
//var app = builder.Build();

//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();
//app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

//app.UseAuthentication();
//app.UseAuthorization();

//app.MapControllers();

//app.Run();
