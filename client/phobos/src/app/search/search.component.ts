import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Output()
	public search: EventEmitter<string> = new EventEmitter<string>();

	private searchControl: FormControl;

	constructor() {}

	ngOnInit() {
		this.searchControl = new FormControl('');
	}

	public onSearch(): void {
		this.search.emit(this.searchControl.value);
	}

	public onKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter') this.onSearch();
	}

	public setSearch(term: string): void {
		this.searchControl.setValue(term);
	}
}
