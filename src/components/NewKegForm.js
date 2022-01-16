import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcpercent: event.target.alcpercent.value, pints: event.target.pints.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
          <button type='submit'>Add Keg!</button>
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm
