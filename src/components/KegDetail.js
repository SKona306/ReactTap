import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <hr />
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <hr />
      <p>Alcohol Content: {keg.alcpercent}%</p>
      <p>Price: ${keg.price}</p>
      <p>Pints in stock: {keg.pints}</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail
