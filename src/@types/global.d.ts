import { Reactotron } from 'reactotron-core-client';

export {}; // this file needs to be a module
declare global {
  type ReactotronExtended = Reactotron & {
    log: (...args: unknown[]) => void;
  };

  const Reactotron: ReactotronExtended;

  type ValueOf<T> = T[keyof T];

  namespace NodeJS {
    interface ProcessEnv {
      WEB3AUTH_CLIENT_ID: string;
      WC_PROJECT_ID: string;
    }
  }
}
