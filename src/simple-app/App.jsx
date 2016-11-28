import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';

function App({store}) {
  return <div>
    <h1>Simple App</h1>
    <Form name={store.name} error={store.error} setName={store.setName} firstName={store.firstName} lastName={store.lastName} />
  </div>
}

export default observer(App);
