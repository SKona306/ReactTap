import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => 
        <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcpercent={keg.alcpercent}
          pints={keg.pints}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList
