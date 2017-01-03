import React from 'react';
import {observer} from 'mobx-react';
import store from './store';

setTimeout(function(){
  store.setEnv('live');
}, 2000);

function ViewApp({change}) {
  return <div>
    <button className="btn" onClick={e => change('live')}>Change to live</button>
  </div>
}

export default observer(ViewApp);
