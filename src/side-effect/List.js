import React, {Component} from 'react';
import {observer} from 'mobx-react';

function ListItem({item}) {
  return <li>{item.title}</li>
}

function List({items}) {
  return <ul>
    {items.map((item, index) => <ListItem key={index} item={item} />)}
  </ul>
}

export default observer(List);
