import {observable, action} from 'mobx';

class Store {
  @observable env = 'test';

  @action setEnv = (env = this.env === 'live' ? 'test' : 'live') => {
    this.env = env
  };

  toString() {
    const env = this.env;

    return JSON.stringify({
      env
    }, null, 2)
  }

}

export default new Store;




