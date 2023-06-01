using Booking_App.DataBase;
using Booking_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using static System.Net.Mime.MediaTypeNames;

namespace Booking_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaiKhoanController : ControllerBase
    {
        private readonly MyDBContext _context;
        public TaiKhoanController(MyDBContext context) {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetAll() {
            var taiKhoans = _context.TaiKhoans.ToList();
            return Ok(taiKhoans);
        }

      
    }
}
