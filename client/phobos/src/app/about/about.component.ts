import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	public year: number;

	constructor() {
		this.year = new Date().getFullYear();
	}

	ngOnInit() {}
}
