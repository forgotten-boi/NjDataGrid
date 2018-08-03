using Javra.Payroll.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Javra.Payroll.Entity.BaseEntity
{
    public interface IQueryObject
    {
        List<SearchData> searchData { get; set; }
        string SortBy { get; set; }
        bool IsSortAscending { get; set; }
        int Page { get; set; }
        byte PageSize { get; set; }
    }
}
