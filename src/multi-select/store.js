import {observable, action} from 'mobx';

class Store {
  @observable options = [
    {label: 'Test 1', value: 'test-1'},
    {label: 'Test 2', value: 'test-2'}
  ];

  @observable values = [];

  @action update = (values) => {
    this.values = values;
  };

  toString() {
    const options = this.options;
    const values = this.values;

    return JSON.stringify({
      options,
      values
    }, null, 2)
  }
}


export default new Store;
