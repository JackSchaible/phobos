using SolrNet.Impl;
using System.Collections.Generic;

namespace server.Models
{
    public class MovieResult
    {
        public List<Movie> Movies { get; set; }
        public List<SpellCheckResult> SpellChecking { get; set; }
    }
}
