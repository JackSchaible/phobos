using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.Collections.Generic;

namespace server
{
    public interface IMovieService
    {
        List<Movie> GetAll(int page);
        ActionResult<MovieResult> Search(string term);
    }
}
