import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum Media {
	Phone,
	Tablet,
	Desktop
}

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
		this.subject.next(this.getMedia(event.target.innerWidth));
	}

	public onChange(): Observable<Media> {
		return this.subject.asObservable();
	}

	private getMedia(width: number): Media {
		let mediaType: Media;

		if (width <= 425) mediaType = Media.Phone;
		else if (width <= 768) mediaType = Media.Tablet;
		else mediaType = Media.Desktop;

		return mediaType;
	}
}
