﻿using Microsoft.EntityFrameworkCore;
using NjGrid.DataAccess;
using NjGrid.Repository.Irepositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace NjGrid.Repository.Repositories
{
    public abstract class Repository<T, T2> : IRepository<T, T2> where T : class
    {
        private ApplicationDbContext _dataContext;
        private DbSet<T> _dbset;

        public Repository(ApplicationDbContext DataContext)
        {
            _dataContext = DataContext;
            _dbset = DataContext.Set<T>();
        }
        public virtual IQueryable<T> GetAll()
        {
            return _dbset.AsQueryable<T>();
        }
        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbset.ToListAsync();
        }
        public virtual async Task<T> GetByIDAsync(T2 id)
        {
            return await _dbset.FindAsync(id);
        }
        public virtual async Task AddAsync(T entity)
        {
            await _dbset.AddAsync(entity);
        }

        public virtual T GetById(T2 id)
        {
            return _dbset.Find(id);
        }
        public virtual IQueryable<T> GetAllWithNavigation(string[] children)
        {
            if (children != null)
            {
                foreach (var child in children)
                {
                    _dbset.Include(child);
                }
            }
            return _dbset;
        }
        public IQueryable<T> GetAllWithNavigation(string[] children, Expression<Func<T, bool>> where)
        {
            if (children != null)
            {
                foreach (var child in children)
                {
                    _dbset.Include(child);
                }
            }
            return _dbset.Where(where);
        }
        public virtual IQueryable<T> FindBy(Expression<Func<T, bool>> where)
        {
            return _dbset.Where(where).AsQueryable<T>();
        }

        public virtual void Add(T entity)
        {
            _dbset.Add(entity);
        }
        public virtual void Delete(T entity)
        {
            _dbset.Attach(entity);
            _dataContext.Entry(entity).State = EntityState.Deleted;
        }
        public virtual void Update(T entity)
        {
            _dbset.Attach(entity);
            _dataContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Save(T entity)
        {
            _dbset.Add(entity);
        }
        public async Task DeleteAsync(T2 Id)
        {
            var entity = await _dbset.FindAsync(Id);
            _dbset.Remove(entity);
        }
        public async Task DeleteAsync(System.Linq.Expressions.Expression<Func<T, bool>> match)
        {
            var entities = await _dbset.Where(match).ToListAsync();
            foreach (var entity in entities)
            {
                _dbset.Remove(entity);
            }
        }
        public virtual IEnumerable<T> GetFiltered(Expression<Func<T, bool>> where)
        {
            return _dbset.Where(where).ToList();
        }
        public virtual async Task<IEnumerable<T>> GetFilteredAsync(Expression<Func<T, bool>> where)
        {
            return await Task.FromResult<IEnumerable<T>>(_dbset.Where(where).ToList());
        }
        public virtual async Task<T> FindByIdAsync(Expression<Func<T, bool>> where)
        {
            return await Task.FromResult<T>(_dbset.Where(where).SingleOrDefault());
        }

        public virtual IQueryable<T> GetAllQueryable()
        {
            return _dbset.AsQueryable<T>();
        }

        public void Delete(T2 id)
        {
            var entity = _dbset.Find(id);
            _dbset.Remove(entity);
        }

        public virtual IQueryable<T> Table
        {
            get
            {
                return _dbset;
            }
        }
        public virtual IQueryable<T> TableAsNoTracking
        {
            get
            {
                return _dbset.AsNoTracking();
            }
        }

        // public List<T> 
        public async Task<IEnumerable<T>> ExecWithStoreProcedureAsync(string ProcedureName)
        {
            var result = await _dbset.FromSql<T>(ProcedureName).ToListAsync();
            return result;

        }

        public async Task<IEnumerable<T>> ExecWithStoreProcedureAsync(string ProcedureName, params object[] parameters)
        {
            return await _dbset.FromSql<T>(ProcedureName, parameters).ToListAsync();
        }

        public async Task<int> ExecWithStoreProcedureAsync(string query, SqlParameter[] parameter)
        {
            try
            {
                _dataContext.Database.OpenConnection();
                DbCommand cmd = _dataContext.Database.GetDbConnection().CreateCommand();
                cmd.CommandText = query;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddRange(parameter);
                var data = new List<int>();
                var result = await cmd.ExecuteNonQueryAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet ExecWithStoreProcedureMultipleData(string query, SqlParameter[] parameter)
        {
            var ConnectionObj = _dataContext.Database.GetDbConnection().ConnectionString;
            SqlConnection con = new SqlConnection(ConnectionObj);
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();
            DataSet ds = new DataSet();
            cmd = new SqlCommand(query, con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddRange(parameter);
            da = new SqlDataAdapter(cmd);
            da.Fill(ds);
            con.Close();
            return ds;
        }

        public List<T1> CreateListFromTable<T1>(DataTable tbl) where T1 : new()
        {
            // define return list
            List<T1> lst = new List<T1>();

            // go through each row
            foreach (DataRow r in tbl.Rows)
            {
                // add to the list
                lst.Add(CreateItemFromRow<T1>(r));
            }

            // return the list
            return lst;
        }

        // function that creates an object from the given data row
        public static T1 CreateItemFromRow<T1>(DataRow row) where T1 : new()
        {
            // create a new object
            T1 item = new T1();

            // set the item
            SetItemFromRow(item, row);

            // return 
            return item;
        }

        public static void SetItemFromRow<T1>(T1 item, DataRow row) where T1 : new()
        {
            // go through each column
            foreach (DataColumn c in row.Table.Columns)
            {

                // find the property for the column
                PropertyInfo p = item.GetType().GetProperty(c.ColumnName);

                // if exists, set the value
                if (p != null && row[c] != DBNull.Value)
                {
                    if (p.PropertyType == typeof(int))
                    {
                        p.SetValue(item, Convert.ToInt32(row[c]), null);
                    }
                    else
                    {
                        p.SetValue(item, row[c], null);
                    }
                }
            }
        }

    }
}
