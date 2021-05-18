import devConfig from "../config/dev.json";
import prodConfig from "../config/prod.json";

export class ConfigService {
  static environmentType = {
    prod: "prod",
    dev: "dev",
  };
  static data;
  static environment;
  static loadConfig(environment) {
    this.environment = environment;
    switch (this.environment) {
      case this.environmentType.prod:
        console.log = function () {};
        this.data = prodConfig;
        break;
      case this.environmentType.dev:
        this.data = devConfig;
        break;
      default:
        this.data = devConfig;
    }
  }
}
