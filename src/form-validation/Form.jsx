import React from 'react';
import {observer} from 'mobx-react';

function Form({username, password, valid, setProperty}) {
  return <form className="form-inline" noValidate>
    <div className="form-group mr-1">
      <label htmlFor="username" className="mr-1">Username</label>
      <input type="text"
             id="username"
             className="form-control"
             value={username}
             onChange={e => setProperty({username: e.target.value})}/>
    </div>

    <div className="form-group mr-1">
      <label htmlFor="password" className="mr-1">Password</label>
      <input type="text"
             id="password"
             className="form-control"
             value={password}
             onChange={e => setProperty({password: e.target.value})}/>

    </div>

    <div className="form-group">
      <button className="btn btn-primary" disabled={!valid}>Submit</button>
    </div>

  </form>
}

export default observer(Form);
