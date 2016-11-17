'use strict';
import {observable, action} from 'mobx';

class Store {
  @observable name = 'alon';

  @action setName(name) {
    this.name = name;
  }
}

export default new Store;




