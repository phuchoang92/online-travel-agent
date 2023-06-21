using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime;

namespace Api.Database
{
    [Table("Booking")]
    public class Booking
    {
        [Key]
        public Guid BookingId { get; set; }
        [Required]
        public byte status { get; set; }
        [Required]
        public DateTime BookingDate { get; set; }
        public int TotalCost { get; set; }
    }
}
