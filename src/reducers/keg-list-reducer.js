import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, alcpercent, price, pints, id } = action;
  switch(action.type) {
    case c.ADD_KEG : 
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          alcpercent: alcpercent,
          price: price,
          pints: pints,
          id: id
        }
      });
    case c.DELETE_KEG: 
      let newState = {...state};
      delete newState[id];
      return newState;
    case c.INCREMENT_KEG:
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          alcpercent: alcpercent,
          price: price,
          pints: pints + 1,
          id: id}
      });
    case c.DECREMENT_KEG: 
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          alcpercent: alcpercent,
          price: price,
          pints: pints - 1,
          id: id
        }
      });
    default :
    return state;
  }
};