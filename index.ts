import mc from 'minecraft-protocol';
import { EventEmitter } from 'events';
import pluginLoader from './lib/plugin_loader';
import { supportedVersions } from './lib/version';

interface IPluginOptions {
  [key: string]: boolean
}

interface IOptions {
  username?: string;
  password?: string;
  host?: string;
  port?: number;
  version?: string;
  clientToken?: string;
  accessToken?: string;
  logErrors?: boolean;
  keepAlive?: boolean;
  checkTimeoutInterval: number;
  loadInternalPlugins?: boolean;
  plugins?: IPluginOptions;
  chat?: 'enabled' | 'commandsOnly' | 'disabled';
  colorsEnabled?: boolean;
  viewDistance?: 'far' | 'normal' | 'short' | 'tiny';
  difficulty?: string;
  showCape?: boolean;
  chatLengthLimit?: number;
};

export class Bot extends EventEmitter {
  constructor(options: IOptions) {
    super();
  }
}