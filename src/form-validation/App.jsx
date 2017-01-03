'use strict';

import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';

function App({store}) {
  return <div className="container">
    <h1 className="mt-2 mb-3">Form Validation</h1>
    <Form username={store.username}
          password={store.password}
          setProperty={store.setProperty}
          valid={store.valid} />

    <hr className="mb-3" />

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
