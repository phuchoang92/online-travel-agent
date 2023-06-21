using System.ComponentModel.DataAnnotations;
using System;

namespace Api.Models
{
    public class RoomModel
    {
        public Guid RoomID { get; set; }
        [Required]
        [MaxLength(10)]
        public string RoomNumber { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public byte Status { get; set; }
        public byte Style { get; set; }
    }
}
