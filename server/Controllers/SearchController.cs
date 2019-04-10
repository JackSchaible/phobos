using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using SolrNet;
using SolrNet.Commands.Parameters;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private ISolrOperations<Product> _solr;

        public SearchController(ISolrOperations<Product> solr)
        {
            _solr = solr;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<string> Get()
        {
            var results = _solr.Query(new SolrQuery("foundation"), new QueryOptions() { Rows = 100 });
            return results.Count.ToString();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
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
