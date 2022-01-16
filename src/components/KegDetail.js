import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingIncrease, onClickingDecrease } = props;
  const pints = keg.pints === 0 ? "Out of Stock" : keg.pints;
  const buyButton = keg.pints === 0 ? <p></p> : <button onClick={() => onClickingDecrease(keg.id)}>Buy</button>
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <hr />
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <hr />
      <p>Alcohol Content: {keg.alcpercent}%</p>
      <p>Price: ${keg.price}</p>
      <p>Pints in stock: {pints}</p>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={() => onClickingIncrease(keg.id)}>Restock</button>
      {buyButton}
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrease:PropTypes.func
}

export default KegDetail
