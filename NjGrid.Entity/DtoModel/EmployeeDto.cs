using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NjGrid.Entity.DtoModel
{
    public class EmployeeDto
    {
        [Key]
        public int Id { get; set; }
        public int EmployeeId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
        

        public DateTime? DOB { get; set; }

        [Required]
        public string PrimaryMobileNo { get; set; }
        public string SecondaryMobileNo { get; set; }
        [Required]
        public string Email { get; set; }
        public string TemporaryAddress { get; set; }
        [Required]
        public string PermanentAddress { get; set; }

        [Required]
        public string Sex { get; set; }
        public bool IsActive { get; set; }
        public string FullName { get; set; }
    }
}
