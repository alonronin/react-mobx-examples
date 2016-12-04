import React from 'react';
import {observer} from 'mobx-react';

function NavBar({env}) {
  return <p>from navbar: {env}</p>
}

function Header({env, change}) {
  return <div>
    <p>{env}</p>
    <NavBar env={env} />
    <button onClick={e => change()}>Change Env</button>
  </div>
}

export default observer(Header);
