import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  const stockCheck = props.pints === 0 ? "Out of Stock" : props.pints;
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: <em>{props.alcpercent}%</em></p>
        <p>Pints: {stockCheck}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcpercent: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
}

export default Keg
