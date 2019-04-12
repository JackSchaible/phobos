using server.Models;
using SolrNet;
using SolrNet.Commands.Parameters;
using System.Collections.Generic;
using System.IO;

namespace server
{
    //Can probably implement a caching mechanism to improve performance
    public class MoviesService : IMovieService
    {
        private ISolrOperations<Movie> _solr;

        public MoviesService(ISolrOperations<Movie> solr)
        {
            _solr = solr;
        }

        private void Initialize()
        {
            //See if there are movies in the solr dataset
            bool hasRecords = _solr.Query(new SolrQuery("*:*"), new QueryOptions() { Rows = 10 }).Count > 0;
            if (hasRecords) return;

            //Populate the dataset with the csv data
            List<Movie> movies = new List<Movie>();

            using (var reader = new StreamReader(""))
            {

            }

            //Load csv, add movies, send to solr
        }
    }
}
