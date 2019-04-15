import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DatePipe, CurrencyPipe]
})
export class AppComponent {}
