import {
  CountryCodeType,
  LocaleCodesType,
  MethodType,
  RegionType,
  TablerIconsFilled,
  TablerIconsOutline,
} from '../../types';

/**
 * @minItems 1
 */
interface IName {
  [key: string]: string;
}

interface IUser {
  name: string;
  email: string;
  password: {
    hash: string;
  };
}

interface IDefaultData {
  /**
   * @description laguage and value. Ex: en: Person
   */
  name?: IName | IName[] | string;

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
   * @description Screen icon. Name of the icon from https://tabler.io/icons
   */
  icon?: TablerIconsFilled | TablerIconsOutline;

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
   * @minItems 1
   */
  description?: {
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
}

export interface Data {
  [key: string]: IDefaultData[] | IUser[];
}
