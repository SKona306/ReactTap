import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p>Price: {props.price}</p>
      <p>Alcohol Content: <em>{props.alcpercent}%</em></p>
      <p>Pints: {props.pints}</p>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcpercent: PropTypes.string.isRequired,
  pints: PropTypes.string.isRequired
}

export default Keg
