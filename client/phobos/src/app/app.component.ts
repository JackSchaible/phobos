import {
	Component,
	OnInit,
	Output,
	EventEmitter,
	ViewChild
} from '@angular/core';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie';
import { DatePipe, CurrencyPipe } from '@angular/common';
import MovieViewModel from './models/movieViewModel';
import { SearchComponent } from './search/search.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DatePipe, CurrencyPipe]
})
export class AppComponent implements OnInit {
	public title = 'phobos';

	public columnDefs = [
		// { headerName: 'ID', field: 'id', sortable: true, filter: true },
		{ headerName: 'Name', field: 'name', sortable: true, filter: true },
		{
			headerName: 'Tagline',
			field: 'tagline',
			sortable: true,
			filter: true
		},
		{
			headerName: 'Release Date',
			field: 'releaseDate',
			sortable: true,
			filter: true
		},
		{ headerName: 'Budget', field: 'budget', sortable: true, filter: true },
		{
			headerName: 'Revenue',
			field: 'revenue',
			sortable: true,
			filter: true
		},
		{
			headerName: 'Runtime',
			field: 'runtimeMinutes',
			sortable: true,
			filter: true
		}
	];
	public rowData: any;

	public searchTerm: string;

	public suggestions: Array<string> = Array<string>();

	@ViewChild(SearchComponent)
	public searchComponent: SearchComponent;

	constructor(
		private movieService: MovieService,
		private datePipe: DatePipe,
		private currencyPipe: CurrencyPipe
	) {
		// this.rowData = this.movieService.GetAll();
		// this.movieService.GetAll().subscribe(movies => {
		// 	const movieModels = [];
		// 	movies.forEach(movie => {
		// 		movieModels.push(this.processMovie(movie));
		// 	});
		// 	this.rowData = movieModels;
		// });
	}

	public ngOnInit(): void {
		this.movieService.GetAll().subscribe(results => {
			this.rowData = this.processResults(results);
		});
	}

	private processResults(results: Array<Movie>): Array<MovieViewModel> {
		const movies = [];
		results.forEach(result => {
			movies.push(this.processMovie(result));
		});

		return movies;
	}

	private processMovie(movie: Movie): MovieViewModel {
		return new MovieViewModel(
			movie.id,
			movie.name,
			this.datePipe.transform(movie.releaseDate, 'mediumDate'),
			this.currencyPipe.transform(movie.budget, 'CAD'),
			this.currencyPipe.transform(movie.revenue, 'CAD'),
			`${movie.runtimeMinutes} min.`,
			movie.tagline
		);
	}

	public onSearch(searchTerm: string): void {
		this.suggestions = [];
		this.movieService.Search(searchTerm).subscribe(results => {
			this.rowData = this.processResults(results.movies);

			if (
				results.spellChecking.length === 0 ||
				results.spellChecking[0].suggestions.length === 0
			)
				return;

			this.suggestions = results.spellChecking[0].suggestions;
		});
	}

	public suggestionClicked(suggestion: string): void {
		this.searchComponent.setSearch(suggestion);
		this.onSearch(suggestion);
	}
}
