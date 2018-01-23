import { Compound, AminoAcid, Polycyclic, Heterocyclic, Nucleobase, Vitamin } from './compound';

export const AMINOACIDS: AminoAcid[] = [
	new AminoAcid("glycine", "glycín", "glycin", "Gly", "G", false),
	new AminoAcid("alanine", "alanín", "alanin", "Ala", "A", false),
	new AminoAcid("valine", "valín", "valin", "Val", "V", true),
	new AminoAcid("leucine", "leucín", "leucin", "Leu", "L", true),
	new AminoAcid("isoleucine", "izoleucín", "isoleucin", "Ile", "I", true),
	new AminoAcid("proline", "prolín", "prolin", "Pro", "P", false),
	new AminoAcid("methionine", "metionín", "methionin", "Met", "M", true),
	new AminoAcid("phenylalanine", "fanylalanín", "fenylalanin", "Phe", "F", true),
	new AminoAcid("tryptophan", "tryptofán", "tryptofan", "Trp", "W", true),
	new AminoAcid("serine", "serín", "serin", "Ser", "S", false),
	new AminoAcid("threonine", "treonín", "threonin", "Thr", "T", true),
	new AminoAcid("cysteine", "cysteín", "cystein", "Cys", "C", false),
	new AminoAcid("selenocysteine", "selenocysteín", "selenocystein", "Sec", "U", false),
	new AminoAcid("tyrosine", "tyrozín", "tyrosin", "Tyr", "Y", false),
	new AminoAcid("asparagine", "asparagín", "asparagin", "Asn", "N", false),
	new AminoAcid("glutamine", "glutamín", "glutamin", "Gln", "Q", false),
	new AminoAcid("aspartic acid", "asparágová kyselina", "asparagová kyselina", "Asp", "D", false),
	new AminoAcid("glutamic acid", "glutámová kyselina", "glutamová kyselina", "Glu", "E", false),
	new AminoAcid("lysine", "lyzín", "lysin", "Lys", "K", true),
	new AminoAcid("pyrrolysine", "pyrolyzín", "pyrolysin", "Pyl", "O", false),
	new AminoAcid("arginine", "arginín", "arginin", "Arg", "R", false),
	new AminoAcid("histidine", "histidín", "histidin", "His", "H", true)
];

export const POLYCYCLICS: Polycyclic[] = [
	new Polycyclic("naphthalene", "naftalén", "naftalen"),
	new Polycyclic("anthracene", "antracén", "anthracen"),
	new Polycyclic("phenanthrene", "fenantrén", "fenathren"),
	new Polycyclic("naphthacene", "naftacén", "naftacen"),
	new Polycyclic("chrysene", "chrysén", "chrysen"),
	new Polycyclic("pyrene", "pyrén", "pyren"),
	new Polycyclic("indene", "indén", "inden"),
	new Polycyclic("azulene", "azulén", "azulen"),
	new Polycyclic("fluorene", "fluorén", "fluoren")
];

export const HETEROCYCLICS: Heterocyclic[] = [
	new Heterocyclic("tetrahydrofuran", "tetrahydrofurán", "tetrahydrofuran"),
	new Heterocyclic("tetrahydrothiophene", "tetrahydrotiofén", "tetrahydrothiofen"),
	new Heterocyclic("pyrrolidine", "pyrolidín", "pyrrolidin"),
	new Heterocyclic("furan", "furán", "furan"),
	new Heterocyclic("thiophene", "tiofén", "thiofen"),
	new Heterocyclic("pyrrole", "pyrol", "pyrrol"),
	new Heterocyclic("2<i>H</i>-pyrrole", "2<i>H</i>-pyrol", "2<i>H</i>-pyrrol"),
	new Heterocyclic("3<i>H</i>-pyrrole", "3<i>H</i>-pyrol", "3<i>H</i>-pyrrol"),
	new Heterocyclic("pyrazole", "pyrazol", "pyrazol"),
	new Heterocyclic("pyrazoline", "pyrazolín", "pyrazolin"),
	new Heterocyclic("pyrazolidine", "pyrazolidín", "pyrazolidin"),
	new Heterocyclic("imidazole", "imidazol", "imidazol"),
	new Heterocyclic("2<i>H</i>-pyran", "2<i>H</i>-pyrán", "2<i>H</i>-pyran"),
	new Heterocyclic("4<i>H</i>-pyran", "4<i>H</i>-pyrán", "4<i>H</i>-pyran"),
	new Heterocyclic("tetrahydropyran", "tetrahydropyrán", "tetrahydropyran"),
	new Heterocyclic("2<i>H</i>-chromene", "2<i>H</i>-chromén", "2<i>H</i>-chromen"),
	new Heterocyclic("xanthene", "xantén", "xanthen"),
	new Heterocyclic("pyridine", "pyridín", "pyridin"),
	new Heterocyclic("pyridazine", "pyridazín", "pyridazin"),
	new Heterocyclic("pyrimidine", "pyrimidín", "pyrimidin"),
	new Heterocyclic("pyrazine", "pyrazín", "pyrazin"),
	new Heterocyclic("indole", "indol", "indol"),
	new Heterocyclic("carbazole", "karbazol", "karbazol"),
	new Heterocyclic("quinoline", "chinolín", "chinolin"),
	new Heterocyclic("isoquinoline", "izochinolín", "izochinolin"),
	new Heterocyclic("cinnoline", "cinolín", "cinnolin"),
	new Heterocyclic("quinazoline", "chinazolín", "chinazolin"),
	new Heterocyclic("quinoxaline", "chinoxalín", "chinoxalin"),
	new Heterocyclic("phthalazine", "ftalazín", "ftalazin"),
	new Heterocyclic("pteridine", "pteridín", "pteridin"),
	new Heterocyclic("purine", "purín", "purin"),
	new Heterocyclic("acridine", "akridín", "akridin"),
	new Heterocyclic("phenazine", "fenazín", "fenazin"),
	new Heterocyclic("phenoxazine", "fenoxazín", "fenoxazin"),
	new Heterocyclic("phenothiazine", "fenotiazín", "fenothiazin"),
	new Heterocyclic("1,7-phenanthroline", "1,7-fenantrolín", "1,7-fenantrolin"),
	new Heterocyclic("piperidine", "piperidín", "piperidin"),
	new Heterocyclic("piperazine", "piperazín", "piperazin"),
	new Heterocyclic("morpholine", "morfolín", "morfolin")
];

export const NUCLEOBASES: Nucleobase[] = [
	new Nucleobase("adenine", "adenín", "adenin", true),
	new Nucleobase("guanine", "guanín", "guanin", true),
	new Nucleobase("cytosine", "cytozín", "cytosin", true),
	new Nucleobase("thymine", "tymín", "thymin", true),
	new Nucleobase("uracil", "uracil", "uracil", true),
	new Nucleobase("hypoxanthine", "hypoxantín", "hypoxanthin", false),
	new Nucleobase("xanthine", "xantín", "xanthin", false)
];

export const VITAMINS: Vitamin[] = [
	new Vitamin("retinol", "retinol", "retinol", "A", "fat"),
	new Vitamin("thiamine", "tiamín", "thiamin", "B<sub>1</sub>", "water"),
	new Vitamin("riboflavin", "riboflavín", "riboflavin", "B<sub>2</sub>", "water"),
	new Vitamin("niacin (nicotinic acid)", "niacín (kyselina nikotínová)", "niacin (kyselina nikotinová)", "B<sub>3</sub>", "water"),
	new Vitamin("pantothenic acid", "kyselina pantoténová", "kyselina pantothenová", "B<sub>5</sub>", "water"),
	new Vitamin("pyridoxine", "pyridoxín", "pyridoxin", "B<sub>6</sub>", "water"),
	new Vitamin("biotin", "biotín", "biotin", "B<sub>7</sub>", "water"),
	new Vitamin("folic acid", "kyselina listová", "kyselina listová", "B<sub>9</sub>", "water"),
	new Vitamin("cobalamin", "kobalamín", "kobalamin", "B<sub>12</sub>", "water"),
	new Vitamin("ascorbic acid", "kyselina askorbová", "kyselina askorbová", "C", "water"),
	new Vitamin("ergocalciferol", "ergokalciferol", "ergokalciferol", "D<sub>2</sub>", "fat"),
	new Vitamin("cholecalciferol", "cholekalciferol", "cholekalciferol", "D<sub>3</sub>", "fat"),
	new Vitamin("α-tocopherol", "α-tokoferol", "α-tokoferol", "E", "fat"),
	new Vitamin("phytomenadione", "fylochinón", "fylochinon", "K<sub>1</sub>", "fat"),
	new Vitamin("menaquinone", "menachinón", "menachinon", "K<sub>2</sub>", "fat"),
	new Vitamin("menadione", "menadión", "menadion", "K<sub>3</sub>", "fat")
];
