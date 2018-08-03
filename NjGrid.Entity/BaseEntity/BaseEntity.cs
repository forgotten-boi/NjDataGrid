
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NjGrid.Entity.BaseEntity
{
    public class BaseEntity<T>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T ID { get; set; }
        //[ForeignKey("CreatedByDetails")]
        //public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        //[ForeignKey("ModifiedByDetails")]
        //public int? ModifiedBy { get; set; }
 
    }
}
