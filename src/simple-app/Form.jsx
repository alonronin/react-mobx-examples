import React, {Component} from 'react';
import {observer} from 'mobx-react';

function Form({
  firstName,
  lastName,
  setName
}) {
  return <form className="form-inline">
    <div className="form-group mr-1">
      <label htmlFor="firstName" className="mr-1">First Name:</label>
      <input type="text"
             id="firstName"
             className="form-control"
             value={firstName}
             onChange={e => setName({first: e.target.value})} />
    </div>

    <div className="form-group">
      <label htmlFor="lastName" className="mr-1">Last Name:</label>
      <input type="text"
             id="lastName"
             className="form-control"
             value={lastName}
             onChange={e => setName({last: e.target.value})} />
    </div>
  </form>
}

export default observer(Form);
