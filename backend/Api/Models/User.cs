using System;

namespace Api.Models
{
    public class UserVM
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public int Role { get; set; }
    }
    public class User : UserVM {
        public Guid Id { get; set; }

    }
}
