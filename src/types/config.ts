import { RouteProps } from 'react-router-dom';

export interface DateFnsOptions {
  locale?: Locale;
}

export interface ModuleRoute extends RouteProps {
  public?: boolean;
  modal?: boolean;
}
