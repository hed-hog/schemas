import { Data } from './Data';
import { Route } from './Route';
import { Screens } from './Screens';
import { Tables } from './Tables';

/**
 * Interface representing the Hedhog configuration.
 */
export interface Hedhog {
  /**
   * Optional screens configuration.
   */
  screens?: Screens;

  /**
   * Optional data configuration.
   */
  data?: Data;

  /**
   * Optional tables configuration.
   */
  tables?: Tables;

  /**
   * Optional routes configuration.
   */
  routes?: Route[];
}
