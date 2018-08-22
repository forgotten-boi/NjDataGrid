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

        public DateTime JoiningDate { get; set; }
        public DateTime? LastDate { get; set; }

        public string CIT_AccountNo { get; set; }
        public string PF_AccountNo { get; set; }
        public string Bank_AccountNo { get; set; }
        public string BankName { get; set; }
        public string PANNumber { get; set; }
        public string Location { get; set; }
        public string OfficeCode { get; set; }

        public string ContactPerson { get; set; }
        public string Status { get; set; }
    }
}
