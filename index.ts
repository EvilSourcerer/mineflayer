import mc, { Client, ClientOptions } from 'minecraft-protocol';
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
  private clientOptions: ClientOptions;
  private botOptions: IOptions;
  private client: Client;

  constructor(options: IOptions) {
    super();
    if(options.logErrors) {
      
    }
    this.clientOptions = {
      username: options.username || 'Player',
      password: options.password,
      host: options.host || 'localhost',
      port: options.port || 25565,
      clientToken: options.clientToken,
      accessToken: options.accessToken
    }
  }

  private connect(): void {
    this.client = mc.createClient(this.clientOptions);

  }
}