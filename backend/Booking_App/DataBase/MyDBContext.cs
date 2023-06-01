using Microsoft.EntityFrameworkCore;

namespace Booking_App.DataBase
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions options): base(options) { }

        #region DbSet

        public DbSet<TaiKhoan> TaiKhoans { get; set; }

        #endregion
    }
}
