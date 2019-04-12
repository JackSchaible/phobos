using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using server.Models;
using SolrNet;
using SolrNet.Mapping;

namespace server
{
    public class Startup
    {
        private IHostingEnvironment _hostingEnvironment;
        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSolrNet($"{Configuration["SolrUrl"]}/solr");
            services.AddSolrNet<Movie>($"{Configuration["SolrUrl"]}/solr/movies");
            services.AddAutoMapper();

            ServiceProvider serviceProvider = services.BuildServiceProvider();
            services.AddSingleton<IMovieService, MoviesService>(s => new MoviesService(serviceProvider.GetService<ILogger<MoviesService>>(), serviceProvider.GetService<ISolrOperations<Movie>>(), _hostingEnvironment.ContentRootPath, serviceProvider.GetService<IMapper>()));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            string domain = _hostingEnvironment.IsDevelopment() ? "https://localhost:4200" : "http://phobos.jackschaible.ca";
            services.AddCors(options =>
                options.AddPolicy("AllowOrigin",
                    b => b.WithOrigins(domain)
                        .AllowAnyHeader()
                        .AllowAnyMethod()));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
