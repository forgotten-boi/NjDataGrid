using GenericProjectTest.Entity;
using NjGrid.Repository;
using NjGrid.Repository.Repositories;
using NjGrid.Services.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using Test.Repositories;

namespace GenericProjectTest.Service
{
    public class TestService : ApplicationService<TestEntity, int>, ITestService
    {
        public TestService(ITestRepository testRepository) : base(testRepository)
        {

        }


    }
}
