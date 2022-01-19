export default (state = {}, action) => {
  const { name, brand, alcpercent, price, pints, id } = action;
  switch(action.type) {
    case 'ADD_KEG' : 
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
    case 'DELETE_KEG': 
      let newState = {...state};
      delete newState[id];
      return newState;
    default :
    return state;
  }
};