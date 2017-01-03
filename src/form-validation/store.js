import {observable, computed, action, autorun} from 'mobx';

class Store {
  @observable username = '';
  @observable password = '';
  @observable valid = false;

  constructor(){
    autorun(() => {
      this.validate();
    })
  }
  @action setProperty = ({
    username = this.username,
    password = this.password
  } = {}) => {
    this.username = username;
    this.password = password;
  };

  validate() {
    this.valid = this.username === 'alon' && this.password === '1234';
  }

  toString() {
    const username = this.username;
    const password = this.password;
    const valid = this.valid;

    return JSON.stringify({
      username,
      password,
      valid
    }, null, 2)
  }
}

export default new Store;




