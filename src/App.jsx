'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';

function App({store}) {
  return <div>
    <h1>React + MobX + Webpack Boilerplate</h1>
    <Form name={store.name} setName={store.setName.bind(store)} />
  </div>
}

export default observer(App);
