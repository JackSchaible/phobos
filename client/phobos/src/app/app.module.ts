import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, NavComponent, SearchComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AgGridModule.withComponents(),
		ReactiveFormsModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
