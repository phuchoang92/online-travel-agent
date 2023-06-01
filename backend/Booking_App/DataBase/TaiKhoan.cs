using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Booking_App.DataBase
{
    [Table("TaiKhoan")]
    public class TaiKhoan
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(20)]
        public string TenDangNhap { get; set; }
        [Required]
        [MaxLength(20)]
        public string MatKhau { get; set; }
       
    }
}
