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
        public DbSet<BookingDetail> BookingDetails { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Room>(e => {
                e.ToTable("Room");
                e.HasKey(r => r.RoomID);
            });

            modelBuilder.Entity<BookingDetail>(e => {
                e.ToTable("BookingDetail");
                e.HasKey(e => new {e.RoomID, e.BookingId, e.Id});
                e.HasOne(e => e.Room)
                    .WithMany(e => e.BookingDetails)
                    .HasForeignKey(e => e.RoomID)
                    .HasConstraintName("FK_BookingDetail_Room");

                e.HasOne(e => e.Booking)
                    .WithMany(e => e.BookingDetails)
                    .HasForeignKey(e => e.BookingId)
                    .HasConstraintName("FK_BookingDetail_Booking");

                e.HasOne(e => e.User)
                    .WithMany(e => e.BookingDetails)
                    .HasForeignKey(e => e.Id)
                    .HasConstraintName("FK_BookingDetail_User");
            });
        }
    }
}
