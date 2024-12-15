import { CountryCodeType, LocaleCodesType, MethodType, RegionType } from "../types";

interface IName {
    [key: string]: string
}

export interface Data {
    [key: string]: {
        /**
         * @description laguage and value. Ex: en: Person
         */
        name?: IName | string;

        /**
         * @description Screen slug
         */
        slug?: string;

        country_id?: {
            where: {
                code: string;
            };
        };

        /**
         * @description Screen method
         *
         */
        method?: MethodType;

        /**
         * @description Screen relations
         *
         */
        relations?: any;

        /**
         * @description Screen url
         *
         */
        url?: string;

        /**
         * @description Screen icon
         *
         */
        icon?: string;
        menu_id?: {
            where: {
                slug: string;
            };
        };

        /**
         * @description aaaaaaaaaaaaa
         */
        description: {
            [key: string]: string;
        };

        /**
         * @description aaaaaaaaaaaaa
         */
        code?: CountryCodeType | LocaleCodesType;

        /**
         * @description aaaaaaaaaaaaa
         */
        region?: RegionType;
    }[]
}