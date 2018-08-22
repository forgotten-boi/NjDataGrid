using AutoMapper;
using NjGrid.Entity.DtoModel;
using NjGrid.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NjGrid
{
    public class MappingProfile : Profile
    {

       
        public MappingProfile()
        {
            CreateMap<Employee, EmployeeDto>().ForMember(x => x.EmployeeId, opts => opts.MapFrom(x => x.ID))
                .ForMember(x=>x.FullName,opts=>opts.Ignore()).ReverseMap();
            CreateMap<FilterResource, Filter>().ReverseMap();
            //CreateMap(typeof(QueryResult<>), typeof(QueryResult<>));
        }
    }
}
