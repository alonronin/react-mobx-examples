import React, {Component} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import ClickOutside from 'react-click-outside';

@observer
class FieldEdit extends Component {
  @observable isEdit = false;
  @observable value = '';
  @observable btnSave;

  constructor(props) {
    super(props);

    this.setValue(props.value);
  }

  @action setEdit = edit => this.isEdit = edit;

  @action setValue = value => this.value = value;
  @action setBtnSave = btn => this.btnSave = btn;

  @action save = () => {
    this.setEdit(false);
    this.props.onChange(this.value);
  };

  @action cancel = (e) => {
    if(this.btnSave.contains(e.target)) return;

    this.setEdit(false);
    this.setValue(this.props.value);
  };

  render() {
    const {
      id,
      placeholder
    } = this.props;

    return (
      <div className="input-group">
        <span className="input-group-btn">
        {this.isEdit ?
          <button
            className="btn btn-primary"
            type="button"
            style={{width: '4rem'}}
            ref={ref => this.btnSave = ref}
            onClick={e => this.save()}>Save</button>
          :
          <button
            className="btn btn-secondary"
            type="button"
            style={{width: '4rem'}}
            onClick={e => this.setEdit(true)}>Edit</button>
        }
      </span>

        {this.isEdit ?
          <ClickOutside onClickOutside={this.cancel}>
            <input
              autoFocus
              type="text"
              id={id}
              className="form-control"
              value={this.value}
              placeholder={placeholder}
              onChange={e => this.setValue(e.target.value)}
            />
          </ClickOutside>
          :
          <p
            className="form-control-static"
            style={{
              display: 'table-cell',
              padding: '.5rem .75rem',
              border: '1px solid rgba(0,0,0,0)'
            }}>{this.value}</p>
        }
      </div>
    )
  }
}

export default FieldEdit;
