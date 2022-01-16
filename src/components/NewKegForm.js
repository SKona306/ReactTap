import React from 'react'
import { v4 } from 'uuid';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcpercent.value);
    console.log(event.target.pints.value);
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
      </form>
    </React.Fragment>
  )
}

export default NewKegForm
