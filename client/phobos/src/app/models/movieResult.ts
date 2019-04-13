import { Movie } from './movie';
import { SpellcheckResult } from './spellcheckResult';

export default interface MovieResult {
	movies: Array<Movie>;
	spellChecking: Array<SpellcheckResult>;
}
