import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (newKeg) => {
  const { name, brand, alcpercent, price, pints, id } = newKeg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    alcpercent: alcpercent,
    price: price,
    pints: pints,
    id: id
  }
}

export const incrementKeg = (kegToBeIncremented) => {
  const { name, brand, alcpercent, price, pints, id } = kegToBeIncremented;
  return {
    type: c.INCREMENT_KEG,
    name: name, 
    brand: brand,
    alcpercent: alcpercent,
    price: price,
    pints: pints,
    id: id
  }
}

export const decrementKeg = (kegToBeDecremented) => {
  const { name, brand, alcpercent, price, pints, id } = kegToBeDecremented;
  return {
    type: c.DECREMENT_KEG,
    name: name,
    brand: brand,
    alcpercent: alcpercent,
    price: price,
    pints: pints,
    id: id
  }
}