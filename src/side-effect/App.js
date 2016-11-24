'use strict';

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import listStore from './list-store';
import List from './List';

function App({store}) {
  return <div>
    <label><input type="checkbox" onChange={e => store.setEnv()} /> {store.environment}</label>
    <List items={listStore.items}></List>
  </div>
}

export default observer(App);
