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
    public class BookingsController : ControllerBase
    {
        private readonly MyDbContext _context;
        public BookingsController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult getAll()
        {
            var listBooking = _context.Bookings.ToList();
            return Ok(listBooking);
        }

        [HttpGet("id")]
        public IActionResult GetById(Guid id)
        {
            var booking = _context.Bookings.SingleOrDefault(ro => ro.BookingId == id);
            if (booking == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(booking);
            }
        }

        [HttpPost]
        public IActionResult CreateNew(BookingModel model)
        {
            try
            {
                var booking = new Booking
                {
                    BookingId = model.BookingId,
                    BookingDate = model.BookingDate,
                    status = model.status,
                    TotalCost = model.TotalCost
                };
                _context.Bookings.Add(booking);
                _context.SaveChanges();
                return Ok(booking);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBookingById(Guid id, BookingModel model)
        {
            var booking = _context.Bookings.SingleOrDefault(ro => ro.BookingId == id);

            if (booking != null)
            {
                booking.BookingDate = model.BookingDate;
                booking.status = model.status;
                booking.TotalCost = model.TotalCost;
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
