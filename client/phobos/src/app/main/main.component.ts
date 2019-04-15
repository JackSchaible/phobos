import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import AdvancedSearchModel from '../models/advancedSearch';
import { MatchMediaService, Media } from '../services/match-media.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	public title = 'phobos';
	public rowData: Array<Movie>;
	public searchTerm: string;
	public suggestions: Array<string> = Array<string>();
	public advanced: boolean;

	public isTablet: boolean;
	public isPhone: boolean;

	public error: boolean;
	public loading: boolean;

	@ViewChild(SearchComponent)
	public searchComponent: SearchComponent;

	constructor(
		private movieService: MovieService,
		private router: Router,
		private media: MatchMediaService
	) {
		this.loading = true;
	}

	public ngOnInit(): void {
		const me = this;
		this.movieService.getAll().subscribe(
			results => {
				this.rowData = results;
				this.loading = false;
			},
			() => {
				me.error = true;
			}
		);

		this.media.onChange().subscribe(mediaType => {
			this.setMedia(mediaType);
		});
	}

	public onSearch(searchTerm: string): void {
		this.suggestions = new Array<string>();
		this.movieService.search(searchTerm).subscribe(results => {
			this.rowData = results.movies;

			if (
				results.spellChecking.length === 0 ||
				results.spellChecking[0].suggestions.length === 0
			)
				return;

			this.suggestions = results.spellChecking[0].suggestions as Array<
				string
			>;
		});
	}

	public suggestionClicked(suggestion: string): void {
		this.searchComponent.setSearch(suggestion);
		this.onSearch(suggestion);
	}

	public gotoMovie(id: string): void {
		this.router.navigateByUrl(`/movie/${id}`);
	}

	public toggleAdvanced(): void {
		this.advanced = !this.advanced;
	}

	public getProfit(budget: number, revenue: number): number {
		let profit = 0;
		if (revenue && budget) profit = Math.round((revenue / budget) * 100);

		return profit;
	}

	private setMedia(media: Media): void {
		switch (media) {
			case Media.Phone:
				this.isPhone = true;
				this.isTablet = false;
				break;

			case Media.Tablet:
				this.isPhone = false;
				this.isTablet = true;
				break;

			case Media.Desktop:
				this.isPhone = false;
				this.isTablet = false;
				break;
		}
	}
}
