using NjGrid.DataAccess;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
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
    public class EmployeeService : IEmployeeService
    {
        public Task AddAsync(Employee entity)
        {
            throw new NotImplementedException();
        }

        public Task CreateUpdateEmployeeAsync(EmployeeDto model)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Expression<Func<Employee, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Task<Employee> FindByIdAsync(Expression<Func<Employee, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Employee>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public QueryResult<Employee> GetAllPaged(Filter filter)
        {
            throw new NotImplementedException();
        }

        public Task<Employee> GetByIDAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Employee>> GetFilteredAsync(Expression<Func<Employee, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Employee entity)
        {
            throw new NotImplementedException();
        }

        Task<ValidationDto<EmployeeDto>> IEmployeeService.CreateUpdateEmployeeAsync(EmployeeDto model)
        {
            throw new NotImplementedException();
        }
    }

}
