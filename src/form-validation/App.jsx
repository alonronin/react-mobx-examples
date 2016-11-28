'use strict';

import React from 'react';
import {observer} from 'mobx-react';
import Form from './Form';

function App({store}) {
  return <div>
    <h1>Form Validation</h1>
    <Form />
  </div>
}

export default observer(App);
