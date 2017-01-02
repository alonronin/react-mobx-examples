import {observable, action} from 'mobx';

class Store {
  @observable email = '';
  @observable password = '';

  @action setProp({
    email = this.email,
    password = this.password
  } = {}) {
    this.email = email;
    this.password = password;
  }

  toString() {
    const email = this.email;
    const password = this.password;

    return JSON.stringify({
      email,
      password
    }, null, 2)
  }
}

export default new Store;
