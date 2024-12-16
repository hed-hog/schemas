export interface Person {
  /**
   * @description Person name
   */
  name?: string;

  /**
   * @description Person age
   * @minimum 18
   * @maximum 120
   * @default 18
   * @multipleOf 3
   */
  age?: number;

  /**
   * @description Allowed additional properties
   */
  [key: string]: any;
}
