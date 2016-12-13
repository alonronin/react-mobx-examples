import React from 'react';
import {observer} from 'mobx-react';
import DayPicker, {DateUtils} from 'react-day-picker';

function App({store}) {
  return <div className="mx-auto" style={{width: '272px', position: 'relative'}}>
    <div className="popover popover-bottom">

      <div className="popover-content">
        <DayPicker onDayClick={ store.setDate }
                   selectedDays={ store.selectedDays }
                   disabledDays={ DateUtils.isPastDay }
        />
      </div>

      <center>
        <p>
          { store.date ? store.date.toDateString() : 'please select a date' }
        </p>

        <p>
          <button className="btn btn-secondary" onClick={e => store.setDate(e, new Date().setDate(20), {})}>Set Day
          </button>
        </p>
      </center>
    </div>
  </div>
}

export default observer(App);
