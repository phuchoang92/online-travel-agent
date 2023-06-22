using Api.Database;
using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public class RoomRepository : IRoomRepository
    {
        private readonly MyDbContext _context;
        public RoomRepository(MyDbContext context)
        {
            _context = context;
        }
        public RoomVM Add(RoomModel room)
        {
            var _room = new Room
            {
                RoomID = room.RoomID,
                RoomNumber = room.RoomNumber,
                Price = room.Price,
                Status = room.Status,
                Style = room.Style
            };

            _context.Add(_room);
            _context.SaveChanges();

            return new RoomVM
            {
                RoomID = _room.RoomID,
                RoomNumber = _room.RoomNumber,
                Price = _room.Price,
                Status = _room.Status,
                Style = _room.Style
            };
        }

        public void Delete(Guid id)
        {
            var room = _context.Rooms.SingleOrDefault(r => r.RoomID == id);

            if(room != null)
            {
                _context.Remove(room);
                _context.SaveChanges();
            }
        }

        public List<RoomVM> GetAll()
        {
            var rooms = _context.Rooms.Select(r => new RoomVM
            {
                RoomID = r.RoomID,
                RoomNumber = r.RoomNumber,
                Price = r.Price,
                Status = r.Status,
                Style = r.Style,
                
        });

            return rooms.ToList();
        }

        public RoomVM GetById(Guid id)
        {
            var room = _context.Rooms.SingleOrDefault(r => r.RoomID == id);
            if(room != null)
            {
                return new RoomVM
                {
                    RoomID = room.RoomID,
                    RoomNumber = room.RoomNumber,
                    Price = room.Price,
                    Status = room.Status,
                    Style = room.Style
                };
            }

            return null;
        }
        public void Update(RoomModel room)
        {
            var _room = _context.Rooms.SingleOrDefault(r => r.RoomID == room.RoomID);
            _room.RoomNumber = room.RoomNumber;
            _room.Status = room.Status;
            _room.Style = room.Style;
            _room.Price = room.Price;
            _context.SaveChanges();
        }
    }
}
