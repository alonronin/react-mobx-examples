import {observable, action} from 'mobx';

class Store {
  @observable email;
  @observable password;

  @action setProp({
    email = this.email,
    password = this.password
  } = {}) {
    this.email = email;
    this.password = password;
  }
}

export default new Store;
