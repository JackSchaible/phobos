import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AgGridModule.withComponents()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
