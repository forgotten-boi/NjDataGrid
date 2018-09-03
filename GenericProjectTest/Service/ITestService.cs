using NjGrid.Repository.IRepositories;
using System;
using System.Collections.Generic;
using System.Text;
using GenericProjectTest.Entity;

namespace GenericProjectTest.Service
{
    public interface ITestService : IApplicationService<TestEntity, int>
    {
    }
}
