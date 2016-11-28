'use strict';

import React, {Component} from 'react';
import {observer} from 'mobx-react';

function Form({name, firstName, lastName, setName}) {
  return <form>
    <label>First Name:</label>
    <input type="text" value={firstName} onChange={e => setName({first: e.target.value})} />

    <label>Last Name:</label>
    <input type="text" value={lastName} onChange={e => setName({last: e.target.value})} />

    <p>{name}</p>
  </form>
}

export default observer(Form);
