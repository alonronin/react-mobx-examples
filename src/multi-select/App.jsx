import React from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

function App({store}) {
  return <div>
    <Select multi
            options={toJS(store.options)}
            onChange={store.update}
            value={toJS(store.values)} />
  </div>
}

export default observer(App);
