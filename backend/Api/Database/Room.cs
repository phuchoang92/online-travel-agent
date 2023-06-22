﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Database
{
    [Table("Room")]
    public class Room
    {
        [Key]
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