import React from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

function App({store}) {
  return <div className="container">
    <h2 className="mt-2 mb-1">Using MobX with 3rd party components</h2>

    <Select multi
            options={toJS(store.options)}
            onChange={store.update}
            value={toJS(store.values)} />

    <hr className="mb-3"/>

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
