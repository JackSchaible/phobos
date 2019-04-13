import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MovieResult from '../models/movieResult';

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private url = 'https://localhost:44394/api/search';
	private lastSearch = '*:*';

	constructor(private http: HttpClient) {}

	/**
	 * GetAll
	 */
	public GetAll(): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>(`${this.url}?page=0`);
	}

	/**
	 * Search
	 */
	public Search(term: string): Observable<MovieResult> {
		if (!term) term = '*:*';

		// prevent multiple hits to the server
		if (term === this.lastSearch) return;
		this.lastSearch = term;

		return this.http.get<MovieResult>(
			`${this.url}/search?term=${encodeURIComponent(term)}`
		);
	}
}
