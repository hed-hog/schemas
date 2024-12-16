export interface Person {
  /**
   * Person name
   */
  name?: string;

  /**
   * Person age
   * @minimum 18
   * @maximum 120
   * @default 18
   * @multipleOf 3
   */
  age?: number;

  /**
   * Allowed additional properties
   */
  [key: string]: any;
}
