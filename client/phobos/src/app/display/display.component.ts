import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
	public movie: MovieViewModel;

	public error: boolean;

	constructor(private route: ActivatedRoute, private movies: MovieService) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.movies.getById(id).subscribe(movieResult => {
			if (movieResult.movies && movieResult.movies.length > 0) {
				this.movie = movieResult.movies[0] as MovieViewModel;
				this.movie.runtime = this.calculateRuntime();

				if (this.movie.revenue && this.movie.budget)
					this.movie.profit = Math.round(
						(this.movie.revenue / this.movie.budget) * 100
					);
			} else {
				this.error = true;
			}
		});
	}

	public calculateRuntime(): string {
		const hoursCount = Math.floor(this.movie.runtimeMinutes / 60);
		const minutesCount = this.movie.runtimeMinutes % 60;

		const hoursText = hoursCount === 1 ? 'hour' : 'hours';
		const minutesText = minutesCount === 1 ? 'minute' : 'minutes';

		return `${hoursCount} ${hoursText} and ${minutesCount} ${minutesText}`;
	}
}

interface MovieViewModel extends Movie {
	runtime: string;
	profit: number;
}
