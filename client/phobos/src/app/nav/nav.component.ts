import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	public isHome: boolean;
	public isNew: boolean;
	public isAbout: boolean;

	constructor(private router: Router) {}

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				switch (event.urlAfterRedirects) {
					case '/':
						this.isHome = true;
						this.isNew = false;
						this.isAbout = false;
						break;

					case '/new':
						this.isHome = false;
						this.isNew = true;
						this.isAbout = false;
						break;

					case '/about':
						this.isHome = false;
						this.isNew = false;
						this.isAbout = true;
						break;
				}
			}
		});
	}
}
