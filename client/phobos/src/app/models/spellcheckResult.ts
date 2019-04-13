export interface SpellcheckResult {
	query: string;
	numFound: number;
	startOffset: number;
	endOffset: number;
	suggestions: Array<string>;
}
