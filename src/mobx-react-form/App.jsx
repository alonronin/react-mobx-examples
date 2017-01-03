import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';
import formStore from './form-store';

//setTimeout(() => formStore.set({email: 'alon@ronin.co.il'}), 2000);

function App({store}) {
  return <div className="container">
    <h1 className="mt-1 mb-3">MobX-React form</h1>

    <Form form={formStore}/>

    <hr className="mb-3" />

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
