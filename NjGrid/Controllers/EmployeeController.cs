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
    [Route("api/[controller]")]
    [ApiController]
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
            //return new string[] { "value1", "value2" };
         
         
            var result = await _employeeService.GetAllAsync();
            return result;
            //return Ok(result);

            //return Json(new { data = result, count = result.ToList().Count });
        }

        // GET: api/Employee/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _employeeService.GetAllAsync();

            return Json(result);
            //return "value";
        }

        // POST: api/Employee
        //[HttpPost]
        //public async Task<IActionResult> Post([FromBody] EmployeeDto model)
        //{
        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }
        //        var employee = Mapper.Map<EmployeeDto, Employee>(model);
        //        try
        //        {
        //            await _employeeService.AddAsync(employee);
        //            return new JsonResult(new { result = "True", message = "Success"});
        //        }
        //        catch (Exception ex)
        //        {

        //            return new JsonResult(new { result = "False", message = ex.Message});
        //        }
               
        //        //if (validationDto.IsSucess)
        //        //{
        //        //    return new JsonResult(new { result = validationDto.IsSucess, message = validationDto.Message });
        //        //}
        //        //return new JsonResult(new { result = validationDto.IsSucess, message = validationDto.Message });

        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode((int)HttpStatusCode.InternalServerError, "Error while creating employee");
        //    }
        //}

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
    }
}
