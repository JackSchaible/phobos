export default class MovieViewModel {
	constructor(
		public id: string,
		public name: string,
		public releaseDate: string,
		public budget: string,
		public revenue: string,
		public runtimeMinutes: string,
		public tagline: string
	) {}
}
