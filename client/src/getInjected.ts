type InjectedWindow = Window & {
  serverInject: ServerInject;
};

interface ServerInject {
  __active: boolean | string;
  device: string | null;
  host: string;
  name: string;
  upstream: string;
  token: string;
}

const w = (typeof window === 'undefined' ? { serverInject: {} } : window) as InjectedWindow;

export function isInjected(): boolean {
  return getInjected('__active', false) as boolean;
}

export function getInjected<T extends keyof ServerInject, D>(
  key: T,
  defaultValue: D,
): ServerInject[T] | D {
  return typeof w.serverInject === 'string' ? defaultValue : w.serverInject[key];
}
