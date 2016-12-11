import React from 'react';
import {observer} from 'mobx-react';

function Form({username, password, valid, setProperty}) {
  return <form>
    <label>Username</label>
    <input type="text"
           value={username}
           onChange={e => setProperty({username: e.target.value})} />

    <label>Password</label>
    <input type="text"
           value={password}
           onChange={e => setProperty({password: e.target.value})} />

    <p>{JSON.stringify(valid)}</p>
  </form>
}

export default observer(Form);
