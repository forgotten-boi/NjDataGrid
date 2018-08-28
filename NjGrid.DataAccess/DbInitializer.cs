using System;
using System.Linq;

namespace NjGrid.DataAccess
{
    public static class DbInitializer
    {
        private static ApplicationDbContext _context;
        public static void Initialize(ApplicationDbContext appContext)
        {
            appContext.Database.EnsureCreated();
            _context = appContext;
            if (_context.Employee.Count() == 0)
            {
                _context.Employee.AddRange(
               new Entity.Entities.Employee
               {
                   FirstName = "Shova",
                   LastName = "Gupta",
                   PrimaryMobileNo = "9823029023",
                   Location = "New Baneshwor",
                   Email = "info@hotmail.com",
                   Sex = "F",
                   JoiningDate = DateTime.Now.AddYears(-2)
               },
                 new Entity.Entities.Employee
                 {
                      //ID = 2,
                      FirstName = "Ram",
                     LastName = "Sharan Gupta",
                     PrimaryMobileNo = "9823029023",
                     Location = "New Baneshwor",
                     Email = "info@gmail.com",
                     Sex = "M",

                     JoiningDate = DateTime.Now.AddYears(-2)
                 },
                   new Entity.Entities.Employee
                   {
                        //ID = 3,
                        FirstName = "Hari",
                       LastName = "Sharan Gupta",
                       PrimaryMobileNo = "9823029023",
                       Location = "New Baneshwor",
                       Email = "info@email.com",
                       Sex = "M",

                       JoiningDate = DateTime.Now.AddYears(-2)
                   }
               );
                _context.SaveChanges();
            }
        }
    }
}
