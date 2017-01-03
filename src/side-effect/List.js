import React, {Component} from 'react';
import {observer} from 'mobx-react';

function ListItem({item}) {
  return <li className="list-group-item">{item.title}</li>
}

function List({items}) {
  return <ul className="list-group">
    {items.map((item, index) => <ListItem key={index} item={item} />)}
  </ul>
}

export default observer(List);
