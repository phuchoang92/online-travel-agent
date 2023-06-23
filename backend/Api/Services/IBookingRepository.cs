using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public interface IBookingRepository
    {
        List<BookingVM> GetAll();
        BookingVM GetById(Guid id);
        BookingVM Add(BookingVM booking);
        void Update(BookingVM booking);
        void Delete(Guid id);
    }
}
