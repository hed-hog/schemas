export interface Screens {
    [key: string]: {
        /** @description Screen title in different languages */
        title: {
            /** @description laguage and value. Ex: en: 'Person'*/
            [key: string]: string;
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
            menu_id: {
                where: { slug: string; };
            };
        };
        relations: {
            [key: string]: {
                title: {
                    [key: string]: string;
                };
            }
        }
    };
}