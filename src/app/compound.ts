export class Compound {
	readonly formulaUrl: string;

	constructor(readonly name: string, readonly nameSk: string, readonly nameCs: string) {
		this.formulaUrl = '<img src="assets/img/formulae/' + this.stripHtmlTags(name).replace(/ /g, "_") + '.png">';
	}

	protected stripHtmlTags(s: string) {
   	if ((s === null) || (s === '')) return '';
		else {
			return s.replace(/<[^>]*>/g, '');
		}
	}
}

export class AminoAcid extends Compound {
	constructor(name, nameSk, nameCs, readonly abbr3: string, readonly abbr1: string, readonly essential: boolean) {
		super(name, nameSk, nameCs);
	}
}

export class Heterocyclic extends Compound {
	constructor(name, nameSk, nameCs) {
		super(name, nameSk, nameCs);
	}
}

export class Polycyclic extends Compound {
	constructor(name, nameSk, nameCs) {
		super(name, nameSk, nameCs);
	}
}

export class Vitamin extends Compound {
	constructor(name, nameSk, nameCs, readonly genericName: string, readonly solubility: "fat" | "water") {
		super(name, nameSk, nameCs);
	}
}

export class Nucleobase extends Compound {
	constructor(name, nameSk, nameCs, readonly primary: boolean) {
		super(name, nameSk, nameCs);
	}
}
