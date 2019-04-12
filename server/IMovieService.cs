using server.Models;
using System.Collections.Generic;

namespace server
{
    public interface IMovieService
    {
        List<Movie> GetAll();
    }
}
