import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand" />
        <input
          type="number"
          min={1}
          name="price"
          placeholder="Price" />
        <input
          type="number"
          name="alcpercent"
          placeholder="Alcohol Percentage" />
        <input 
          type="number"
          min={1}
          name="pints"
          placeholder="Pints in stock" />
          <button type='submit'>{props.buttonText}</button>
      </form>
      <hr />
      <h4>Tips for Adding Kegs</h4>
      <ul>
        <li>A full keg has 24 pints</li>
        <li>A half keg has 12 pints</li>
      </ul>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
export default ReusableForm
