import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';
import formStore from './form-store';

//setTimeout(() => formStore.set({email: 'alon@ronin.co.il'}), 2000);
//setTimeout(() => formStore.set({email: 'alon@ronin.co.il'}), 2000);

function App({store}) {
  return <div>
    <Form form={formStore}/>

    <ul>
      <li>email: {store.email}</li>
      <li>password: {store.password}</li>
    </ul>
  </div>
}

export default observer(App);
