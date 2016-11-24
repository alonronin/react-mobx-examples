'use strict';

import React, {Component} from 'react';
import {observer} from 'mobx-react';

function List({items}) {
  return (
    <ul>
      {items.map(item => <li>{item.title}</li>)}
    </ul>
  )
}

export default observer(List);
