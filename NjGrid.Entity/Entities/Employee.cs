using NjGrid.Entity.BaseEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NjGrid.Entity.Entities
{
    public class Employee : BaseEntity<int>
    {
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? DOB { get; set; }
        public string PrimaryMobileNo { get; set; }
        public string SecondaryMobileNo { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string TemporaryAddress { get; set; }
        public string PermanentAddress { get; set; }
        [Required]
        public string Sex { get; set; }
        public bool IsActive { get; set; }
    }
}
