import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import store from './store';

const plugins = { dvr: validatorjs };

const fields = {
  email: {
    label: 'Email',
    rules: 'required|email|string|between:5,25',
  },
  password: {
    label: 'Password',
    rules: 'required|string|between:5,25',
  },
};

class LoginForm extends MobxReactForm {
  onSuccess(form) {
    // get field values
    console.log('Form Values!', form.values());

    store.setProp(form.values());
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
}

export default new LoginForm({ fields, plugins });
