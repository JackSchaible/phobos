using System;

namespace server.Models
{
    public class AdvancedSearch
    {
        public bool UseName { get; set; }
		public string Name { get; set; }
		public bool UseDate { get; set; }
		public DateTime Date { get; set; }
		public string DateOption { get; set; }
    }
}
