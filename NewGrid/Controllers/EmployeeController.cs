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

namespace NjGrid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public IEmployeeService _employeeService { get; set; }
        protected EmployeeController(IEmployeeService employeeService)
        {
            this._employeeService = employeeService;
        }

        // GET: api/Employee
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Employee/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employee
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EmployeeDto model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var validationDto = await _employeeService.CreateUpdateEmployeeAsync(model);
                if (validationDto.IsSucess)
                {
                    return new JsonResult(new { result = validationDto.IsSucess, message = validationDto.Message });
                }
                return new JsonResult(new { result = validationDto.IsSucess, message = validationDto.Message });

            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "Error while creating employee");
            }
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
