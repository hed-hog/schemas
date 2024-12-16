import { Country } from './Country';
import { Person } from './Person';

export interface Beta {
  /**
   * @description Person array
   * @minItems 2
   */
  person?: Person[];

  /**
   * @description Country array
   * @minItems 3
   */
  countries?: Country[];
}
