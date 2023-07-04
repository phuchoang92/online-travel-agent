using Api.Database;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Net;

namespace Api.Services
{
    public class HotelRepository : IHotelRepository
    {
        private MyDbContext _context;
        public HotelRepository(MyDbContext context)
        {
            _context = context;
        }
        public HotelVM Add(HotelVM hotel)
        {
            var _hotel = new Hotel
            {
                HotelID = Guid.NewGuid(),
                HotelName = hotel.HotelName,
                HotelRule = hotel.HotelRule,
                Address = hotel.Address,
                City = hotel.City,
                Description = hotel.Description,
                Style = hotel.Styles

            };

            _context.Add(_hotel);
            _context.SaveChanges();

            return new HotelVM
            {
                HotelName = _hotel.HotelName,
                HotelRule = _hotel.HotelRule,
                Address = _hotel.Address,
                City = _hotel.City,
                Description = _hotel.Description,
                Styles = _hotel.Style
            };
        }

        public void Delete(Guid id)
        {
            var hotel = _context.Hotels.SingleOrDefault(b => b.HotelID == id);

            if (hotel != null)
            {
                _context.Remove(hotel);
                _context.SaveChanges();
            }
        }

        public List<HotelVM> GetAll()
        {
            var hotels = _context.Hotels.Select(_hotel => new HotelVM
            {
                HotelID = _hotel.HotelID,
                HotelName = _hotel.HotelName,
                HotelRule = _hotel.HotelRule,
                Address = _hotel.Address,
                City = _hotel.City,
                Description = _hotel.Description,
                Styles= _hotel.Style

            });

            return hotels.ToList();
        }

        public HotelVM GetById(Guid id)
        {
            var _hotel = _context.Hotels.SingleOrDefault(b => b.HotelID == id);
            if (_hotel != null)
            {
                return new HotelVM
                {
                    HotelName = _hotel.HotelName,
                    HotelRule = _hotel.HotelRule,
                    Address = _hotel.Address,
                    City = _hotel.City,
                    Description = _hotel.Description,
                    Styles = _hotel.Style
                };
            }

            return null;
        }
        public void Update(HotelVM hotel)
        {
            var _hotel = _context.Hotels.SingleOrDefault(b => b.HotelID == hotel.HotelID);
            _hotel.HotelName = hotel.HotelName;
            _hotel.HotelRule = hotel.HotelRule;
            _hotel.Address = hotel.Address;
            _hotel.City = hotel.City;
            _hotel.Description = hotel.Description;
            _hotel.Style = hotel.Styles;
            _context.SaveChanges();
        }
    }
}
