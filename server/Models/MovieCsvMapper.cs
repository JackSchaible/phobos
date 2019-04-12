using CsvHelper.Configuration;
using System;

namespace server.Models
{
    public class MovieCsvMapper : ClassMap<Movie>
    {
        public MovieCsvMapper()
        {
            Map(m => m.Id).Name("id");
            Map(m => m.Budget).Name("budget");
            Map(m => m.Description).Name("overview");
            Map(m => m.Name).Name("original_title");
            Map(m => m.ReleaseDate).Name("release_date").ConvertUsing(row =>
            {
                string field = row.GetField("release_date");

                DateTime.TryParse(field, out DateTime value);
                return value;
            });
            Map(m => m.Revenue).Name("revenue").ConvertUsing(row =>
            {
                string field = row.GetField("revenue");

                long.TryParse(field, out long value);
                return value;
            });
            Map(m => m.RuntimeMinutes).Name("runtime").ConvertUsing(row =>
            {
                string field = row.GetField("runtime");
                float.TryParse(field, out float value);

                return (int)value;
            });
            Map(m => m.Tagline).Name("tagline");
        }
    }
}
