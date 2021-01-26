import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    // Is this needed?
    this.state = {
        isValid: false
    };
  }

  render() {
    const { isValid, type } = this.props;
    return (
      <>
        <h3>
          {this.props.name}
        </h3>
        <input type={this.props.type}
              required={true}
              onChange={this.props.validate}
              placeholder={this.props.placeholder} />

      </>

    );
  }
}

export default Input;