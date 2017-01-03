import React from 'react';
import {observer} from 'mobx-react';
import DayPicker, {DateUtils} from 'react-day-picker';

function App({store}) {
  return <div className="container">
    <div className="mx-auto">
      <div className="popover popover-bottom" style={{position: 'relative'}}>

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

    <hr className="mb-3"/>

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
