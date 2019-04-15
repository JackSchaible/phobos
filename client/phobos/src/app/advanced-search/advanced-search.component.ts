import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Output,
	EventEmitter
} from '@angular/core';
import { NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import AdvancedSearchModel from '../models/advancedSearch';

@Component({
	selector: 'app-advanced-search',
	templateUrl: './advanced-search.component.html',
	styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
	public showDatePicker: boolean;
	public defaultDate: NgbDate;

	public model: AdvancedSearchModel;

	@ViewChild('d')
	public dateControl: NgbDatepicker;

	@Output()
	public searching: EventEmitter<AdvancedSearchModel> = new EventEmitter<
		AdvancedSearchModel
	>();

	constructor() {
		this.model = new AdvancedSearchModel(
			false,
			null,
			false,
			new Date(),
			'='
		);
		this.defaultDate = new NgbDate(
			this.model.date.getFullYear(),
			this.model.date.getMonth() + 1,
			this.model.date.getDay()
		);
	}

	ngOnInit() {}

	public search(): void {
		this.searching.emit(this.model);
	}

	public toggleShowDatePicker(): void {
		this.showDatePicker = !this.showDatePicker;
	}

	public dateSelected(event: NgbDate): void {
		this.model.date = new Date(event.year, event.month - 1, event.day);
		this.showDatePicker = false;
	}
}
