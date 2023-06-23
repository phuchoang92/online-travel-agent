using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public interface IRoomRepository
    {
        List<RoomVM> GetAll();
        RoomVM GetById(Guid id);
        RoomVM Add(RoomVM room);
        void Update(RoomVM room);
        void Delete(Guid id);
    }
}
