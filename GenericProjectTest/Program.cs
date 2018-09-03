using GenericProjectTest.DbContext;
using GenericProjectTest.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Linq;
using Test.Repositories;

namespace GenericProjectTest
{
    class Program
    {
        public static readonly string DefaultConnection = "Server=localhost\\SQLEXPRESS01;Database=DbNjgrid;Integrated Security=SSPI;MultipleActiveResultSets=true;Persist Security Info=True;";
          static void Main(string[] args)
        {
            var serviceProvider = new ServiceCollection()
                .AddLogging()
                .AddScoped(typeof(ITestRepository), typeof(TestRepository))
                .AddScoped(typeof(ITestService), typeof(TestService))
                 
                .AddDbContext<TestDbContext>(options => options.UseSqlServer(DefaultConnection))
                .BuildServiceProvider();

            serviceProvider
                .GetService<ILoggerFactory>()
                .AddConsole(LogLevel.Debug);

            var logger = serviceProvider.GetService<ILoggerFactory>()
           .CreateLogger<Program>();
            logger.LogDebug("Starting application");

            
            var bar = serviceProvider.GetService<ITestService>();
            var testList = bar.GetAllAsync().Result;

            testList.ToList().ForEach(p =>
            {
                Console.WriteLine(JsonConvert.SerializeObject(p));
            });

            logger.LogDebug("All done!");

            Console.WriteLine("Hello World!");
        }
    }
}
