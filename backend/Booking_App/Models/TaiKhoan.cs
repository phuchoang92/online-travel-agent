using System;

namespace Booking_App.Models
{
    public class TaiKhoanVM
    {
        public string TenTk { get; set; }
        public string MatKhau { get; set; }

    }

    public class TaiKhoan : TaiKhoanVM
    {
        public Guid Id { get; set; }
    }
}
