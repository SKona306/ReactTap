import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

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
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail
