using System;
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

        [HttpGet]
        public ActionResult<List<Movie>> Get(int page)
        {
            var results = _movies.GetAll(page);
            return results;
        }

        [HttpGet]
        [Route("getById")]
        public ActionResult<MovieResult> GetMovie(string id)
        {
            var result = _movies.GetById(id);
            return result;
        }

        [HttpGet("{search}")]
        [Route("search")]
        public ActionResult<MovieResult> Search(string term)
        {
            return _movies.Search(term);
        }

        // POST api/search
        [HttpPost]
        public ActionResult<MovieResult> Post([FromBody] AdvancedSearch searchOptions)
        {
            return _movies.AdvancedSearch(searchOptions);
        }
    }
}
