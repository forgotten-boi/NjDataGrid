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
                   FirstName = "Ram",
                   LastName = "Sharan Gupta",
                   PrimaryMobileNo = "9823029023",
                   Location = "New Baneshwor",
                   JoiningDate = DateTime.Now.AddYears(-2)
               },
                 new Entity.Entities.Employee
                 {
                      //ID = 2,
                      FirstName = "Ram",
                     LastName = "Sharan Gupta",
                     PrimaryMobileNo = "9823029023",
                     Location = "New Baneshwor",
                     JoiningDate = DateTime.Now.AddYears(-2)
                 },
                   new Entity.Entities.Employee
                   {
                        //ID = 3,
                        FirstName = "Ram",
                       LastName = "Sharan Gupta",
                       PrimaryMobileNo = "9823029023",
                       Location = "New Baneshwor",
                       JoiningDate = DateTime.Now.AddYears(-2)
                   }
               );
                _context.SaveChanges();
            }
        }
    }
}
