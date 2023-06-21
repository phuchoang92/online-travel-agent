using Microsoft.EntityFrameworkCore;

namespace Api.Database
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions options) : base(options) { }

        #region DbSet
        public DbSet<User> Users { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        #endregion
    }
}
