
using Api.Database;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly AppSettings _appSettings;
        public LoginController(MyDbContext context, IOptionsMonitor<AppSettings> optionsMonitor) {
            _context = context;
            _appSettings = optionsMonitor.CurrentValue;
        }

        [HttpPost("Login")]
        public IActionResult Validate(LoginModel model) {
            var user = _context.Users.SingleOrDefault(p => p.Username == model.Username && 
            p.Password == model.Password);
            if (user == null)
            {
                return Ok(new ApiResponse
                {
                    Success = false,
                    Message = "Validate username/password"
                });
            }

            return Ok(new ApiResponse
            {
                Success = true,
                Message = "Authenticate success",
                Data = GenerateToken(user)
            }) ;
        }

        private TokenModel GenerateToken(User user)
        {
            var jwtToken = new JwtSecurityTokenHandler();

            var seretKeyBytes = Encoding.UTF8.GetBytes(_appSettings.SecretKey);

            var tokenDecription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Username", user.Username),
                    new Claim("Id", user.Id.ToString()),

                    //roles

                    new Claim("TokenId", Guid.NewGuid().ToString())
                }),

                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(seretKeyBytes),
                SecurityAlgorithms.HmacSha512Signature
                )
                
            };

            var token = jwtToken.CreateToken(tokenDecription);
            var acessToken =  jwtToken.WriteToken(token);

            return new TokenModel
            {
                AccessToken = acessToken,
                RefreshToken = GenerateRefreshToken()
            };
        }

        private string GenerateRefreshToken()
        {
            var random = new byte[32];
            using(var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(random);
                return Convert.ToBase64String(random);
            }
        }
    }
}
