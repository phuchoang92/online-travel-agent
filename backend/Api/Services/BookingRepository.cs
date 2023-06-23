﻿using Api.Database;
using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public class BookingRepository : IBookingRepository
    {
        private readonly MyDbContext _context;
        public BookingRepository(MyDbContext context)
        {
            _context = context;
        }
        public BookingVM Add(BookingVM room)
        {
            var _booking = new Booking
            {
                BookingId = room.BookingId,
                BookingDate = room.BookingDate,
                status = room.status,
                TotalCost = room.TotalCost,
                
            };

            _context.Add(_booking);
            _context.SaveChanges();

            return new BookingVM
            {
                BookingId = _booking.BookingId,
                BookingDate = _booking.BookingDate,
                status = _booking.status,
                TotalCost = _booking.TotalCost

            };
        }

        public void Delete(Guid id)
        {
            var booking = _context.Bookings.SingleOrDefault(b => b.BookingId == id);

            if (booking != null)
            {
                _context.Remove(booking);
                _context.SaveChanges();
            }
        }

        public List<BookingVM> GetAll()
        {
            var bookings = _context.Bookings.Select(_booking => new BookingVM
            {
                BookingId = _booking.BookingId,
                BookingDate = _booking.BookingDate,
                status = _booking.status,
                TotalCost = _booking.TotalCost

            });

            return bookings.ToList();
        }

        public BookingVM GetById(Guid id)
        {
            var _booking = _context.Bookings.SingleOrDefault(b => b.BookingId == id);
            if (_booking != null)
            {
                return new BookingVM
                {
                    BookingId = _booking.BookingId,
                    BookingDate = _booking.BookingDate,
                    status = _booking.status,
                    TotalCost = _booking.TotalCost
                };
            }

            return null;
        }
        public void Update(BookingVM booking)
        {
            var _booking = _context.Bookings.SingleOrDefault(b => b.BookingId == booking.BookingId);
            _booking.BookingDate = booking.BookingDate;
            _booking.status = booking.status;
            _booking.TotalCost = booking.TotalCost;
            _context.SaveChanges();
        }
    }
}