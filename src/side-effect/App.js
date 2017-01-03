import React, {Component} from 'react';
import {observer} from 'mobx-react';
import listStore from './list-store';
import List from './List';

function App({store}) {
  return <div className="container">
    <h1 className="mt-2 mb-3">Side Effect</h1>

    <label className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" onChange={e => store.setEnv()} />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">{store.environment}</span>
    </label>

    <List items={listStore.items} />

    <hr className="mb-3"/>

    <h5>App Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>

    <h5>List Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{listStore.toString()}</code></pre>
  </div>
}

export default observer(App);
