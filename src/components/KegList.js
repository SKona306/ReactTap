import React from 'react';
import Keg from './Keg';

function KegList() {
  return (
    <React.Fragment>
      <Keg 
      name='beer'
      brand='superBeer'
      price='10'
      alcpercent='15'
      pints='25'/>
    </React.Fragment>
  )
}

export default KegList
