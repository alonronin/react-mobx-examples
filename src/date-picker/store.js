import {observable, action} from 'mobx';
import { DateUtils } from 'react-day-picker';
class Store {
  @observable date = new Date();

  @action setDate = (e, date, { selected, disabled }) => {
    if( disabled ) return;
    this.date = selected ? null : new Date(date);
  };

  selectedDays = (day) => DateUtils.isSameDay(day, this.date);

  toString() {
    const date = this.date;

    return JSON.stringify({
      date
    }, null, 2)
  }
}


export default new Store;
