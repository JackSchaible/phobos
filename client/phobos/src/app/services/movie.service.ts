import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MovieResult from '../models/movieResult';
import AdvancedSearchModel from '../models/advancedSearch';

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
	public getAll(): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>(`${this.url}?page=0`);
	}

	/**
	 * Search
	 */
	public search(term: string): Observable<MovieResult> {
		if (!term) term = '*:*';

		// prevent multiple hits to the server
		// if (term === this.lastSearch) return;
		// this.lastSearch = term;

		return this.http.get<MovieResult>(
			`${this.url}/search?term=${encodeURIComponent(term)}`
		);
	}

	/**
	 * GetById
	 */
	public getById(id: string) {
		if (!id) return;

		return this.http.get<MovieResult>(`${this.url}/getById?id=${id}`);
	}

	public advancedSearch(model: AdvancedSearchModel): Observable<MovieResult> {
		return this.http.post<MovieResult>(`${this.url}`, model);
	}
}
