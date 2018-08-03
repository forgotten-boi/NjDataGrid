using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using NjGrid.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NjGrid.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Blogs { get; set; }
            //public DbSet<Project> Posts { get; set; }

            //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            //{
                
            //    optionsBuilder.UseSqlServer(ConfigurationManager);
            //}
        }

    //    public class Employee
    //    {
    //        public int BlogId { get; set; }
    //        public string Url { get; set; }
    //        public int Rating { get; set; }
    //        public List<Project> Posts { get; set; }
    //    }

    //    public class Project
    //{
    //        public int PostId { get; set; }
    //        public string Title { get; set; }
    //        public string Content { get; set; }

    //        public int BlogId { get; set; }
    //        public Employee Blog { get; set; }
    //    }

    }

