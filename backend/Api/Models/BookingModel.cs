using System.ComponentModel.DataAnnotations;
using System;

namespace Api.Models
{
    public class BookingModel
    {
        public Guid BookingId { get; set; }
        [Required]
        public byte status { get; set; }
        [Required]
        public DateTime BookingDate { get; set; }
        public int TotalCost { get; set; }
    }
}
