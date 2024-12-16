import { TablerIconsFilled, TablerIconsOutline } from '../../types';

export interface Screens {
  [key: string]: {
    /**
     * Screen title in different languages
     */
    title: {
      /**
       * laguage and value. Ex: en: 'Person'
       */
      [key: string]: string;
    };
    /**
     * Menu configuration
     */
    menu: {
      /**
       * Screen url
       */
      url: string;

      /**
       * Screen icon. Name of the icon from https://tabler.io/icons
       * @default home
       */
      icon?: TablerIconsFilled | TablerIconsOutline;

      /**
       * Screen name in different languages
       */
      name: {
        /**
         * laguage and value. Ex: en: 'Person'
         */
        [key: string]: string;
      };

      /**
       * Screen slug
       */
      slug: string;

      /**
       * Screen relations
       */
      relations?: {
        role: {
          where: {
            slug: string;
          };
        }[];
      };

      /**
       * Screen menu id
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
    };

    /**
     * Screen relations
     */
    relations?: {
      [key: string]: {
        /**
         * Screen title in different languages
         */
        title: {
          [key: string]: string;
        };
      };
    };
  };
}
