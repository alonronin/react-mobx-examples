import React from 'react';
import {observer} from 'mobx-react';

function NavBar({env}) {
  return <p className="text-muted"><label className="text-uppercase">from navbar:</label> {env}</p>
}

function Header({env, change}) {
  return <div>
    <p className="lead">this <span className="font-weight-bold">{env}</span> is from header</p>
    <NavBar env={env} />
    <button className="btn btn-secondary" onClick={e => change()}>Change Env</button>
  </div>
}

export default observer(Header);
