using NjGrid.DataAccess;
using NjGrid.Entity.Entities;
using NjGrid.Services.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace NjGrid.Services.Repositories
{
    public class EmployeeRepository : Repository<Employee, int>, IEmployeeRepository
    {
        public EmployeeRepository(ApplicationDbContext context) : base(context)
        {

        }
    }

    public interface IEmployeeRepository : IRepository<Employee, int>
    {

    }
}
