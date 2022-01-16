import React from 'react';
import Keg from './Keg';

const mainKegList = [
  {
    name: "beerOne",
    brand: "superBeer",
    price:"10",
    alcpercent: "15",
    pints:"25"
  },
  {
    name: "beerTwo",
    brand: "electroBeer",
    price: "12",
    alcpercent: "12",
    pints: "30"
  }
]

function KegList() {
  return (
    <React.Fragment>
      <hr />
      {mainKegList.map((keg, index) => 
        <Keg 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcpercent={keg.alcpercent}
          pints={keg.pints}
          key={index}/>
      )}
    </React.Fragment>
  )
}

export default KegList
