using NjGrid.Entity.BaseEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace GenericProjectTest.Entity
{
    public class TestEntity : BaseEntity<int>
    {
        public string TestString { get; set;}
        public DateTime TestDate { get; set; }
        public int TestInt { get; set; }
    }
}
