using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private IMovieService _movies;

        public SearchController(IMovieService movies)
        {
            _movies = movies;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Movie>> Get(int page)
        {
            var results = _movies.GetAll(page);
            return results;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [Route("getMovie")]
        public ActionResult<string> GetMovie(int id)
        {
            return "value";
        }

        [HttpGet("{search}")]
        [Route("search")]
        public ActionResult<MovieResult> Search(string term)
        {
            return _movies.Search(term);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
