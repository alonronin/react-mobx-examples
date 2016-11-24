'use strict';

import {observable, action, autorun} from 'mobx';
import store from './app-store';

class List {
  @observable items = [];

  @action retriveItems() {
    setTimeout(() => {
      this.items = [
        {title: Math.random()},
        {title: Math.random()},
        {title: Math.random()}
      ]
    }, 500)

  }
}

const list = new List;

const dispose = autorun(() => {
  list.retriveItems(store.environment);
});

export default list;
