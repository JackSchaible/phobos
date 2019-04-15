export default class AdvancedSearchModel {
	constructor(
		public useName: boolean,
		public name: string,
		public useDate: boolean,
		public date: Date,
		// '<', '>', or '='
		public dateOption: string
	) {}
}
