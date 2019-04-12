import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'phobos';

	columnDefs = [
		{ headerName: 'ID', field: 'Id' },
		{ headerName: 'Name', field: 'Name' },
		{ headerName: 'Description', field: 'Description' },
		{ headerName: 'Release Date', field: 'ReleaseDate' },
		{ headerName: 'Budget', field: 'Budget' },
		{ headerName: 'Revenue', field: 'Revenue' },
		{ headerName: 'Runtime', field: 'RuntimeMinutes' },
		{ headerName: 'Tagline', field: 'Tagline' }
	];

	//get from service
	rowData = [];

	constructor(private movieService: MovieService) {
		this.movieService.GetAll().subscribe(movies => {
			this.rowData = movies;
		});
	}
}
