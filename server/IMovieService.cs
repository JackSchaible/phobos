using server.Models;
using System.Collections.Generic;

namespace server
{
    public interface IMovieService
    {
        List<Movie> GetAll(int page);
        MovieResult Search(string term);
        MovieResult GetById(string id);
        MovieResult AdvancedSearch(AdvancedSearch model);
    }
}
