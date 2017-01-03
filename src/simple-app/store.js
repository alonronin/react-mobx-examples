import {observable, action, computed} from 'mobx';

class Store {
  @observable firstName = 'alon';
  @observable lastName = 'Valadji';

  @action setName = ({
    first = this.firstName,
    last = this.lastName
  } = {}) => {
    this.firstName = first;
    this.lastName = last;
  };

  @computed get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  toString() {
    const firstName = this.firstName;
    const lastName = this.lastName;
    const name = this.name;

    return JSON.stringify({
      firstName,
      lastName,
      name
    }, null, 2)
  }
}

export default new Store;




