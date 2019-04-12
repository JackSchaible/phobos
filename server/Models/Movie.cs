using SolrNet.Attributes;
using System;

namespace server.Models
{
    public class Movie
    {
        [SolrUniqueKey("id")]
        public string Id { get; set; }

        [SolrField("original_title")]
        public string Name { get; set; }

        [SolrField("overview")]
        public string Description { get; set; }

        [SolrField("release_date")]
        public DateTime ReleaseDate { get; set; }

        [SolrField("budget")]
        public int Budget { get; set; }

        [SolrField("revenue")]
        public long Revenue { get; set; }

        [SolrField("runtime")]
        public int RuntimeMinutes { get; set; }

        [SolrField("tagline")]
        public string Tagline { get; set; }
    }
}
