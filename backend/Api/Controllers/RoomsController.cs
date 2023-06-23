using Api.Database;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly MyDbContext _context;
        public RoomsController(MyDbContext context) { 
            _context = context;
        }

        [HttpGet]
        public IActionResult getAll()
        {
            var listRoom = _context.Rooms.ToList();
            return Ok(listRoom);
        }

        [HttpGet("id")]
        public IActionResult GetById(Guid id) {
            var room = _context.Rooms.SingleOrDefault(ro => ro.RoomID == id);
            if (room == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(room);
            }
        }

        [HttpPost]
        public IActionResult CreateNew(RoomModel model)
        {
            try
            {
                var room = new Room
                {
                    
                    RoomNumber = model.RoomNumber,
                    Price = model.Price,
                    Status = model.Status,
                    Style = model.Style,
                };
                _context.Rooms.Add(room);
                _context.SaveChanges();
                return Ok(room);
            }catch
            {
                return BadRequest();
            }   
        }

        [HttpPut("{id}")]
        public IActionResult UpdateRoomById(Guid id, RoomModel model)
        {
            var room = _context.Rooms.SingleOrDefault(ro => ro.RoomID == id);

            if (room != null)
            {
                room.RoomNumber = model.RoomNumber;
                room.Price = model.Price;
                room.Status = model.Status;
                room.Style = model.Style;
                _context.SaveChanges();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }

    }
}
