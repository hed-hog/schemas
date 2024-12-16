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
   * laguage and value. Ex: en: Person
   */
  name?: IName | IName[] | string;

  /**
   * Screen slug
   */
  slug?: string;

  country_id?: {
    where: {
      code: string;
    };
  };

  /**
   * Screen method
   *
   */
  method?: MethodType;

  /**
   * Screen relations
   *
   */
  relations?: any;

  /**
   * Screen url
   *
   */
  url?: string;

  /**
   * Screen icon. Name of the icon from https://tabler.io/icons
   * @default home
   */
  icon?: TablerIconsFilled | TablerIconsOutline;

  /**
   * Screen menu
   *
   */
  menu_id?: {
    /**
     * Where constraint from menu table
     */
    where: {
      /**
       * Menu slug
       */
      slug: string;
    };
  };

  /**
   * Screen description
   * @minItems 1
   */
  description?: {
    [key: string]: string;
  };

  /**
   * Screen code
   */
  code?: CountryCodeType | LocaleCodesType;

  /**
   * Screen region
   */
  region?: RegionType;
}

export interface Data {
  [key: string]: IDefaultData[] | IUser[];
}
