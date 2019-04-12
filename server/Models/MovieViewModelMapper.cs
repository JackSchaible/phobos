using AutoMapper;
using System;
using System.Linq;

namespace server.Models
{
    public class MovieViewModelMapper : Profile
    {
        public MovieViewModelMapper()
        {
            CreateMap<MovieViewModel, SolrMovie>()
                .ForMember(dest => dest.Budget, opt => opt.MapFrom(src => new int[] { src.Budget }))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => new string[] { src.Description }))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => new string[] { src.Name }))
                .ForMember(dest => dest.ReleaseDate, opt => opt.MapFrom(src => new DateTime[] { src.ReleaseDate }))
                .ForMember(dest => dest.Revenue, opt => opt.MapFrom(src => new long[] { src.Revenue }))
                .ForMember(dest => dest.RuntimeMinutes, opt => opt.MapFrom(src => new int[] { src.RuntimeMinutes }))
                .ForMember(dest => dest.Tagline, opt => opt.MapFrom(src => new string[] { src.Tagline }));

            CreateMap<SolrMovie, MovieViewModel>()
                .ForMember(dest => dest.Budget, opt => opt.MapFrom(src => src.Budget.FirstOrDefault()))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description.FirstOrDefault()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name.FirstOrDefault()))
                .ForMember(dest => dest.ReleaseDate, opt => opt.MapFrom(src => src.ReleaseDate.FirstOrDefault()))
                .ForMember(dest => dest.Revenue, opt => opt.MapFrom(src => src.Revenue.FirstOrDefault()))
                .ForMember(dest => dest.RuntimeMinutes, opt => opt.MapFrom(src => src.RuntimeMinutes.FirstOrDefault()))
                .ForMember(dest => dest.Tagline, opt => opt.MapFrom(src => src.Tagline.FirstOrDefault()));
        }
    }
}
