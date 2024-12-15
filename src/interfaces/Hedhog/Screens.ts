export interface Screens {
  [key: string]: {
    /**
     * @description Screen title in different languages
     */
    title: {
      /**
       * @description laguage and value. Ex: en: 'Person'
       */
      [key: string]: string;
    };
    /**
     * @description Menu configuration
     */
    menu: {
      /**
       * @description Screen url
       */
      url: string;

      /**
       * @description Screen icon
       */
      icon: string;

      /**
       * @description Screen name in different languages
       */
      name: {
        en: string;
        pt: string;
      };

      /**
       * @description Screen slug
       */
      slug: string;

      /**
       * @description Screen relations
       */
      relations: {
        role: {
          where: { slug: string };
        }[];
      };

      /**
       * @description Screen menu id
       */
      menu_id: {
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
    };

    /**
     * @description Screen relations
     */
    relations: {
      [key: string]: {
        /**
         * @description Screen title in different languages
         */
        title: {
          [key: string]: string;
        };
      };
    };
  };
}
