import {observable, action} from 'mobx';

class Store {
  @observable environment = 'TEST';

  @action setEnv = () => {
    this.environment = this.environment == 'TEST' ? 'LIVE' : 'TEST';
  };

  toString() {
    const environment = this.environment;

    return JSON.stringify({
      environment
    }, null, 2)
  }
}

export default new Store;
