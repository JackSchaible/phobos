using AutoMapper;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Models;
using SolrNet;
using SolrNet.Commands.Parameters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace server
{
    //Can probably implement a caching mechanism to improve performance
    public class MoviesService : IMovieService
    {
        //Required DI vars
        private readonly ISolrOperations<Movie> _solr;
        private readonly string _appBasePath;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        //Settings
        private const int PageSize = 100;

        public MoviesService(ILogger<MoviesService> logger, ISolrOperations<Movie> solr, string appBasePath, IMapper mapper)
        {
            _solr = solr;
            _appBasePath = appBasePath;
            _logger = logger;
            _mapper = mapper;

            Initialize();
        }
        private void Initialize()
        {
            //See if there are movies in the solr dataset
            bool hasRecords = _solr.Query(new SolrQuery("*:*"), new QueryOptions() { Rows = 10 }).Count > 0;
            if (hasRecords) return;

            //Populate the dataset with the csv data
            List<Movie> movies;
            string filepath = Path.Combine(_appBasePath, "data", "movies_metadata.csv");

            //Load csv, add movies
            using (StreamReader reader = new StreamReader(filepath))
                using (CsvReader csv = new CsvReader(reader))
                {
                    csv.Configuration.RegisterClassMap<MovieCsvMapper>();
                    csv.Configuration.MissingFieldFound = null;
                    movies = csv.GetRecords<Movie>().ToList();
                }

            //Send to solr
            ResponseHeader addResult = _solr.AddRange(movies);
            ResponseHeader commitResult = _solr.Commit();
            ResponseHeader spellCheckResult = _solr.BuildSpellCheckDictionary();

            //Something went wrong
            if (addResult.Status != 0)
                HandleError(addResult, "add");

            if (commitResult.Status != 0)
                HandleError(commitResult, "commit");

            if (spellCheckResult.Status != 0)
                HandleError(spellCheckResult, "build spellcheck library");
        }

        public List<Movie> GetAll(int page)
        {
            StartOrCursor.Start start = new StartOrCursor.Start(page * PageSize);
            return _solr
                .Query(new SolrQuery("*:*"), new QueryOptions() { Rows = PageSize, StartOrCursor = start })
                .ToList();
        }

        public ActionResult<MovieResult> Search(string term)
        {
            SpellCheckingParameters spellcheck = new SpellCheckingParameters
            {
                Collate = true,
            };

            SolrQueryResults<Movie> results = _solr
                .Query(new SolrQuery(term), new QueryOptions() { Rows = PageSize, SpellCheck = spellcheck });

            return new MovieResult
            {
                Movies = results.ToList(),
                SpellChecking = results.SpellChecking.ToList()
            };
        }

        private void HandleError(ResponseHeader header, string operationName)
        {
            string errMsg = $"Solr {operationName} operation failed with code {header.Status}";
            _logger.LogCritical(errMsg);
            foreach (KeyValuePair<string, string> param in header.Params)
                _logger.LogTrace($"{param.Key}: {param.Value}");

            throw new Exception(errMsg);
        }
    }
}
