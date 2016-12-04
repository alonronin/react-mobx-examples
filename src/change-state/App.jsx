import React from 'react';
import {observer} from 'mobx-react';
import Header from './Header';
import ViewApp from './ViewApp';

function App({store}) {
  return <div>
    <Header env={store.env} change={store.setEnv} />
    <ViewApp change={store.setEnv} />
  </div>
}

export default observer(App);
