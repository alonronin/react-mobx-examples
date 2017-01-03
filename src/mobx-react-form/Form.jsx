import React from 'react';
import {observer} from 'mobx-react';

function Form({form}) {
  return <form>
    <div className={`alert alert-danger mb-2 ${form.error ? '' : 'hidden-xs-up'}`} role="alert">
      <strong>Oh snap!</strong> {form.error}
    </div>

    <div className={`form-group ${form.$('email').error ? 'has-danger': ''}`}>
      <input
        type="text"
        className="form-control"
        name={form.$('email').name}
        value={form.$('email').value}
        placeholder={form.$('email').label}
        onChange={form.$('email').sync}
      />
      <div className="form-control-feedback">{form.$('email').error}</div>
    </div>

    <div className={`form-group ${form.$('password').error ? 'has-danger': ''}`}>
      <input
        type="text"
        className="form-control"
        name={form.$('password').name}
        value={form.$('password').value}
        placeholder={form.$('password').label}
        onChange={form.$('password').sync}
      />
      <div className="form-control-feedback">{form.$('password').error}</div>
    </div>

    <button className="btn btn-primary" type="submit" onClick={form.onSubmit}>Submit</button>
    <button className="btn btn-secondary" type="button" onClick={form.onReset}>Reset</button>
    <button className="btn btn-secondary" type="button" onClick={form.onClear}>Clear</button>

  </form>
}

export default observer(Form);
