'use strict';
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <form>
      <label>Name:</label>
      <input type="text" value={this.props.name} onChange={e => this.props.setName(e.target.value)} />

      <p>{this.props.name}</p>
    </form>
  }
}

export default Form;
