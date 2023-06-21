using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Database
{
    [Table("User")]
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(25)]
        public string Name { get; set; }
        [Required]
        [MaxLength(25)]
        public string Password { get; set; }
        public int Role {get; set; }
    }
}
