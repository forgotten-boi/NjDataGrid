using NjGrid.DataAccess;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using NjGrid.Repository;
using NjGrid.Repository.Irepositories;
using NjGrid.Repository.Repositories;
using NjGrid.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace NjGrid.Services.Repositories
{
    public class EmployeeService : ApplicationService<Employee, int>, IEmployeeService
    {
        public EmployeeService(IEmployeeRepository employeeRepository) : base(employeeRepository)
        {

        }
    }
}
