import { Country } from './Country';
import { Person } from './Person';

export interface Beta {
  /**
   * Person array
   * @minItems 2
   */
  person?: Person[];

  /**
   * Country array
   * @minItems 3
   */
  countries?: Country[];
}
