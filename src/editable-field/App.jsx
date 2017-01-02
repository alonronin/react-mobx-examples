import React from 'react';
import {observer} from 'mobx-react';
import FieldEdit from './FieldEdit';

function App({store}) {
  return <div className="container">
    <h1 className="mt-2 mb-3">Editable Input</h1>
    <form noValidate>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <FieldEdit
          id="firstName"
          placeholder="Enter your first name"
          value={store.firstName}
          onChange={first => store.setName({ first }) } />
      </div>

      <div className="form-group">
        <label htmlFor="firstName">Last name</label>
        <FieldEdit
          id="firstName"
          placeholder="Enter your last name"
          value={store.lastName}
          onChange={last => store.setName({ last }) } />
      </div>
    </form>

    <hr className="mb-3"/>

    <h5>Store</h5>
    <pre className="bg-faded p-2 rounded"><code>{store.toString()}</code></pre>
  </div>
}

export default observer(App);
