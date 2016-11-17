'use strict';
import React, {Component} from 'react';
import {observer} from 'mobx-react';

function Form({name, setName}) {
  return <form>
    <label>Name:</label>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />

    <p>{name}</p>
  </form>
}

export default observer(Form);
