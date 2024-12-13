interface Screens {
	person: {
		title: {
			en: string;
		};
		menu: {
			url: string;
			icon: string;
			name: {
				en: string;
				pt: string;
			};
			slug: string;
			relations: {
				role: {
					where: { slug: string; };
				}[];
			};
		};
	};
}


interface Data {
	[key: string]: {
		name?: {
			[key: string]: string;
		};
		slug?: string;
		country_id?: {
			where: {
				code: string;
			};
		};
		method?: 'GET' | 'POST' | 'PATCH' | 'DELETE'
		relations?: any
	}[];
}

export interface Hedhog {
	screens?: Screens,
	data?: Data
}