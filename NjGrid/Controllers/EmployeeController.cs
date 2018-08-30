using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NjGrid.Services.Interface;
using Newtonsoft.Json;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using AutoMapper;
using NjGrid.Repository.IRepositories;

namespace NjGrid.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class EmployeeController : Controller //ControllerBase
    {
        public IEmployeeService _employeeService { get; set; }

        private readonly IMapper _mapper;
        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            this._employeeService = employeeService;
            _mapper = mapper;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<IEnumerable<Employee>> Get()
        {
            var result = await _employeeService.GetAllAsync();
            return result;
         
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpPost]
        public async Task<IActionResult> GetPagedEmployee([FromBody]FilterResource filterResource)
        {

            try
            {
                //var filterResource = JsonConvert.DeserializeObject<FilterResource>(filterData);
                var result = new QueryResult<EmployeeDto>();
                var filter = _mapper.Map<FilterResource, Filter>(filterResource);
                var queryResult = await _employeeService.GetAllPagedAsync(filter);

                result = _mapper.Map<QueryResult<Employee>, QueryResult<EmployeeDto>>(queryResult);

                Func<string, string, string> FullName = 
                    delegate(string firstName, string lastName)
                  {
                      return firstName + " " + lastName;

                  };
                result.Items.ToList().ForEach(p => p.FullName = FullName(p.FirstName, p.LastName));
               
                return Json(new { data = result.Items, count = result.TotalItems });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError, "Error while retriving employees");
            }
        }



        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }

        async Task<int> SumOfAsync(int[] numbers)

        {
            return await Task.Run(function: Computer);

                int Computer() => numbers.Select(i => i * i).Sum();

        }
        void M<Drum, E>(Drum d, E e) 
            where Drum: Delegate
            where E: List<Enum>

        {
            var abc = (d,e,  Math.PI);
            bool result = abc == (null,null, 41);

            int a = 1, b = 2;
            int c = 2;
        }
    }
}
