import React from 'react';
import {observer} from 'mobx-react';

function Form({ form }) {
  return <form>
    <input
      type="text"
      name={form.$('email').name}
      value={form.$('email').value}
      placeholder={form.$('email').label}
      onChange={form.$('email').sync}
    />
    <p>{form.$('email').error}</p>

    <input
      type="text"
      name={form.$('password').name}
      value={form.$('password').value}
      placeholder={form.$('password').label}
      onChange={form.$('password').sync}
    />
    <p>{form.$('password').error}</p>

    <button type="submit" onClick={form.onSubmit}>Submit</button>
    <button type="button" onClick={form.onReset}>Reset</button>
    <button type="button" onClick={form.onClear}>Clear</button>

    <p>{form.error}</p>
  </form>
}

export default observer(Form);
