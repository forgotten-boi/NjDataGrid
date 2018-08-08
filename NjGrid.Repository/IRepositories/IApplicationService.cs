using NjGrid.Entity.BaseEntity;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace NjGrid.Repository.IRepositories
{
    public interface IApplicationService<T, T2> where T : BaseEntity<T2>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T2 id);
        Task DeleteAsync(Expression<Func<T, bool>> where);
        Task<T> GetByIDAsync(T2 id);
        Task<IEnumerable<T>> GetFilteredAsync(Expression<Func<T, bool>> where);
        Task<T> FindByIdAsync(Expression<Func<T, bool>> where);
        QueryResult<T> GetAllPaged(Filter filter);
    }
}
