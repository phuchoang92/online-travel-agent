using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class RoomVM
    {
        public Guid RoomID { get; set; }
        public string RoomNumber { get; set; }
        public int Price { get; set; }
        public byte Status { get; set; }
        public byte Style { get; set; }
    }
}
