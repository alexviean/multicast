import { MessageTheme } from './components/Message';

export type ChannelLayout =
  | 'single'
  | '1-1-vertical'
  | '1-1-horizontal'
  | '1-2-vertical'
  | '1-2-horizontal'
  | '2-1-vertical'
  | '2-1-horizontal'
  | '2-1-1-vertical'
  | '2-1-1-horizontal'
  | '1-1-2-vertical'
  | '1-1-2-horizontal';

export interface InputEvent<T = string | number> {
  target: {
    value: T;
  };
}

export type DeviceStatus = 'online' | 'offline' | 'searching';

export type DeviceRotation = 0 | 90 | 180 | 270;

export interface Device {
  id: string;
  identifier: string;
  registered: boolean;
  nickname: string;
  address: string;
  model: string;
  supported: boolean;
  rotation: DeviceRotation;
  status: DeviceStatus;
  channel: Channel | null;
}

export interface Channel {
  id: string;
  name: string;
  layout: ChannelLayout;
  duration: number;
  urls: string[][];
  devices: Device[];
}

export interface Alert {
  id: string;
  title: string;
  body: string;
  theme: MessageTheme;
  devices: string[] | null;
}

export interface TakeoverStatus {
  active: boolean;
  channel: Channel | null;
}
