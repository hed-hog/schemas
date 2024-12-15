export interface Route {
  path: string;
  lazy?: {
    component: string;
  };
  children?: Route[];
}
