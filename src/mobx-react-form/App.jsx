import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';
import formStore from './form-store';

//setTimeout(() => formStore.set({email: 'alon@ronin.co.il'}), 2000);
//setTimeout(() => formStore.set({email: 'alon@ronin.co.il'}), 2000);

function App({store}) {
  return <div>
    <Form form={formStore}/>

    <pre><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
