import {observable, action} from 'mobx';

class Store {
  @observable env = 'test';

  @action setEnv = (env = this.env === 'live' ? 'test' : 'live') => {
    this.env = env
  }
}

export default new Store;




