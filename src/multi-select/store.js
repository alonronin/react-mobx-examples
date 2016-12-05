import {observable, action, computed, toJS} from 'mobx';

class Store {
  @observable options = [
    {label: 'Test 1', value: 'test-1'},
    {label: 'Test 2', value: 'test-2'}
  ];

  @observable values = [];

  @action update = (values) => {
    this.values = values;
  };
}


export default new Store;
