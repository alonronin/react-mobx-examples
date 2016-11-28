import React, {Component} from 'react';
import {observer} from 'mobx-react';
import listStore from './list-store';
import List from './List';

function App({store}) {
  return <div>
    <h1>Side Effect</h1>
    <label><input type="checkbox" onChange={e => store.setEnv()} /> {store.environment}</label>
    <List items={listStore.items} />
  </div>
}

export default observer(App);
