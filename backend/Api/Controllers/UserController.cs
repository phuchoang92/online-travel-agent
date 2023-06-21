using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        public static List<User> Users = new List<User>();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Users);
        }

        [HttpPost]
        public IActionResult Create(UserVM userVM) {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = userVM.Name,
                Password = userVM.Password,
                Role = userVM.Role,

            };

            Users.Add(user);

            return Ok(Users);
        }

    }
}
