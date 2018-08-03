using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NjGrid.Services.Interface
{
    public interface IEmployeeService : IApplicationService<Employee, int>
    {
        Task<ValidationDto<EmployeeDto>> CreateUpdateEmployeeAsync(EmployeeDto model);
    }
}
