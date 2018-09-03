using GenericProjectTest.DbContext;
using GenericProjectTest.Entity;
using NjGrid.DataAccess;
using NjGrid.Entity.Entities;
using NjGrid.Repository.Irepositories;
using NjGrid.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Repositories
{
    public class TestRepository : Repository<TestEntity, int>, ITestRepository
    {
        public TestRepository(TestDbContext context) : base(context)
        {

        }
    }

    public interface ITestRepository : IRepository<TestEntity, int>
    {

    }
}
