using Microsoft.EntityFrameworkCore;
using NjGrid.Entity.BaseEntity;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using NjGrid.Infrastructure.Extensions;
using NjGrid.Repository.Irepositories;
using NjGrid.Repository.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace NjGrid.Repository
{
    public abstract class ApplicationService<T, T2> : IApplicationService<T, T2> where T : BaseEntity<T2>
    {

        // private readonly IBusinessContext _businessContext;
        public ApplicationService(IRepository<T, T2> repository)
        //IBusinessContext businessContext)
        {
            Repository = repository;
            //  _businessContext = businessContext;
        }


        public IRepository<T, T2> Repository { get; }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await Repository.GetAllAsync();
        }

        public async Task<QueryResult<T>> GetAllPagedAsync(Filter filter)
        {
            var query = Repository.GetAllQueryable();
            var result = new QueryResult<T>
            {
                TotalItems = query.Count(),

                Items = await query.ApplyCompletePagination(filter).ToListAsync()
            };
            return result;
        }

        public virtual async Task<QueryResult<T>> GetAllAsync(IQueryObject queryObj)
        {
            var result = new QueryResult<T>();
            var query = await Repository.GetAllAsync();

            //foreach (var prop in typeof(T).GetProperties().ToList())
            //{
            ////Check if property is not null, not virtual and is not primary key
            //    bool? isVirtual = prop.IsVirtual();
            //}
            //var columnsMap = new Dictionary<string, Expression<Func<T, object>>>()
            //{

            //    //["make"] = v => v.Model.Make.Name,
            //    //["model"] = v => v.Model.Name,
            //    //["contactName"] = v => v.ContactName
            //};

            //query = query.ApplyOrdering(queryObj, columnsMap);

            //result.TotalItems = query.CountAsync();

            //query = query.ApplyPaging(queryObj);

            //result.Items = await query.ToListAsync();

            return result;

        }





        public virtual async Task AddAsync(T entity)
        {
            await Repository.AddAsync(entity);
            //  await _businessContext.CommitAsync();
        }

        public virtual async Task UpdateAsync(T entity)
        {
            await Task.Run(() => Repository.Update(entity));
            //  await _businessContext.CommitAsync();
        }

        public virtual async Task DeleteAsync(T2 id)
        {
            await Repository.DeleteAsync(id);
            // await _businessContext.CommitAsync();
        }

        public virtual async Task<T> GetByIDAsync(T2 id)
        {
            return await Repository.GetByIDAsync(id);
        }

        public virtual async Task<IEnumerable<T>> GetFilteredAsync(Expression<Func<T, bool>> where)
        {
            return await Repository.GetFilteredAsync(where);
        }
        public virtual async Task<T> FindByIdAsync(Expression<Func<T, bool>> where)
        {
            return await Repository.FindByIdAsync(where);
        }
        public virtual async Task DeleteAsync(Expression<Func<T, bool>> where)
        {
            await Repository.DeleteAsync(where);
        }

        //public Task DeleteAsync(Expression<Func<T, bool>> where)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<IEnumerable<T>> GetFilteredAsync(Expression<Func<T, bool>> where)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<T> FindByIdAsync(Expression<Func<T, bool>> where)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
