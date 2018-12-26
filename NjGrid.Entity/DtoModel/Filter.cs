
using NjGrid.Entity.BaseEntity;
using NjGrid.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NjGrid.Entity.DtoModel
{
    public class Filter : IQueryObject
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public string SearchableColumn { get; set; }
        public List<SearchData> SearchData { get; set; }
    }
}
