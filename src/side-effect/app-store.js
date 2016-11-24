'use strict';

import {observable, action} from 'mobx';

class Store {
  @observable environment = 'TEST';

  @action setEnv = () => {
    this.environment = this.environment == 'TEST' ? 'LIVE' : 'TEST';
  }
}

export default new Store;
