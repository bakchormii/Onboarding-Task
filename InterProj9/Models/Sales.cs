using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace InterProj9.Models
{
    public partial class Sales
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public int? CustomerId { get; set; }
        public int? StoreId { get; set; }
        public string DateSold { get; set; }

        public virtual Product Id1 { get; set; }
        public virtual Store Id2 { get; set; }
        public virtual Customer IdNavigation { get; set; }
    }
}
