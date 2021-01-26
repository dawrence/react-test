import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Field from './Field';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      isValid: false
    };
    this.validateName = this.validateName.bind(this);
  }

  validateName(e) {
    const { name, value: newValue, type } = e.target;
    this.setState({ isNameValid: true});
    // TODO: Validate Name.
  }

  validateAll(){
    //TODO: Validate before submitting form.
  }

  render() {
    return (
      <div className="row">
      <h1 className="text-center">Form Validation</h1>
      <form>
        <Field type='text'
               name='Name:'
               placeholder='Enter your name:'
               validate={this.validateName}
        />
        <Field type='email'
               name='Email:'
               placeholder='Enter your email'/>
        <Field type='tel'
               name='Phone:'
               placeholder='Enter your phone Number'/>
        <Field type='url'
               name='Blog URL:'
               placeholder='Enter your blog url'/>
        <div className="small-6 small-centered text-center columns">
            <button type='submit' onClick={this.validateAll} className="button success expand round text-center">
              Verify
            </button>
        </div>
      </form>
    </div>);
  }
}

export default Form;
