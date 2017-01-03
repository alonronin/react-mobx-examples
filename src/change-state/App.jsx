import React from 'react';
import {observer} from 'mobx-react';
import Header from './Header';
import ViewApp from './ViewApp';

function App({store}) {
  return <div className="container">
    <h2 className="mt-2">Change State</h2>

    <blockquote className="blockquote">Pass props from store to multiple components</blockquote>

    <Header env={store.env} change={store.setEnv} />
    <ViewApp change={store.setEnv} />

    <hr className="mb-3"/>

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>

  </div>
}

export default observer(App);
