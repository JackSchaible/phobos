import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MatchMediaService {
	public media: Media;
	private subject = new Subject<Media>();

	constructor() {
		this.media = this.getMedia(window.innerWidth);

		window.addEventListener('resize', event => this.onresize(event));
	}

	public onresize(event: any) {
		console.log(event);
		this.subject.next(this.getMedia(event.target.innerWidth));
	}

	public onChange(): Observable<Media> {
		return this.subject.asObservable();
	}

	private getMedia(width: number): Media {
		let media: Media;

		if (width <= 425) media = Media.Phone;
		else if (width <= 768) media = Media.Tablet;
		else media = Media.Desktop;

		return media;
	}
}

export enum Media {
	Phone,
	Tablet,
	Desktop
}
