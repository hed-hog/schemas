import { Data } from './Data';
import { Route } from './Route';
import { Screens } from './Screens';
import { Tables } from './Tables';

/**
 * @description Interface representing the Hedhog configuration.
 */
export interface Hedhog {
  /**
   * @description Optional screens configuration.
   */
  screens?: Screens;

  /**
   * @description Optional data configuration.
   */
  data?: Data;

  /**
   * @description Optional tables configuration.
   */
  tables?: Tables;

  /**
   * @description Optional routes configuration.
   */
  routes?: Route[];
}
