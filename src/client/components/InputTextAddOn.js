import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, InputGroup} from 'react-bootstrap';

const InputTextAddOn = (props) =>{
  return(
    <FormGroup controlId={props.name} validationState={props.validationState ? props.validationState : null}>
      <ControlLabel>{props.formLabel}:</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl 
          type={props.type} 
          name={props.name} 
          value={props.value} 
          onChange={props.onChange} 
          autoFocus={props.autoFocus}
        />
      </InputGroup>
    </FormGroup> 
  )
}
export default InputTextAddOn;



