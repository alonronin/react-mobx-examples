import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';

function App({store}) {
  return <div className="container">
    <h1 className="mt-2 mb-3">Simple App</h1>
    <Form name={store.name} error={store.error} setName={store.setName} firstName={store.firstName} lastName={store.lastName} />

    <hr className="mb-3" />

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
