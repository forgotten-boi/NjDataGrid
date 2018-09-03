using GenericProjectTest.Entity;
using Microsoft.EntityFrameworkCore;
using NjGrid.DataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace GenericProjectTest.DbContext
{
    public class TestDbContext : ApplicationDbContext
    {
        public TestDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TestEntity> TestEntity { get; set; }
    }
}
