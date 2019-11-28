/**
 *
 * FileValidator
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ValidatorComponent } from 'react-material-ui-form-validator';

/* eslint-disable react/prefer-stateless-function */
class FileValidator extends ValidatorComponent {
  render() {
    
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;
    delete rest.value;
    return (
      <div>
        <input
          {...rest}
          ref={r => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }
  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <div style={{ color: 'red' }}>{this.getErrorMessage()}</div>;
  }
}

FileValidator.propTypes = {};

export default FileValidator;
