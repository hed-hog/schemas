import {
  CountryCodeType,
  LocaleCodesType,
  MethodType,
  RegionType,
} from '../../types';

interface IName {
  [key: string]: string;
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

    /**
     * @description Screen menu
     *
     */
    menu_id?: {
      /**
       * @description Where constraint from menu table
       */
      where: {
        /**
         * @description Menu slug
         */
        slug: string;
      };
    };

    /**
     * @description Screen description
     */
    description: {
      [key: string]: string;
    };

    /**
     * @description Screen code
     */
    code?: CountryCodeType | LocaleCodesType;

    /**
     * @description Screen region
     */
    region?: RegionType;
  }[];
}
