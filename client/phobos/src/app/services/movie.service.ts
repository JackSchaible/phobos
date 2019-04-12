import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class MovieService {
	private url = "https://localhost:44394/api/search";

	constructor(private http: HttpClient) {}

	/**
	 * GetAll
	 */
	public GetAll(): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>(`${this.url}?page=0`);
	}
}
