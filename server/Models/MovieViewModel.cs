using System;

namespace server.Models
{
    public class MovieViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int Budget { get; set; }
        public long Revenue { get; set; }
        public int RuntimeMinutes { get; set; }
        public string Tagline { get; set; }
    }
}
