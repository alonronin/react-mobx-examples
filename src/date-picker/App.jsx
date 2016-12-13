import React from 'react';
import { observer } from 'mobx-react';
import DayPicker, { DateUtils } from 'react-day-picker';

function App({store}) {
  return <div>
    <DayPicker onDayClick={ store.setDate }
               selectedDays={ store.selectedDays }
               disabledDays={ DateUtils.isPastDay }
    />

    <center>
      <p>
        { store.date ? store.date.toDateString() : 'please select a date' }
      </p>

      <p>
        <button onClick={e => store.setDate(e, new Date().setDate(20), {})}>Set Day</button>
      </p>
    </center>

  </div>
}

export default observer(App);
