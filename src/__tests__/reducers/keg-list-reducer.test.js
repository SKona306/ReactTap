import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {

  const currentState = {
    1: {
      name: 'React Brew',
      brand: 'Reactify',
      alcpercent: '12',
      price: '17',
      pints: 124,
      id: 1
    },
    2: {
      name: 'JerrysBrew',
      brand: 'Jerry',
      alcpercent: '9',
      price: '10',
      pints: 124,
      id: 2
    }
  }

  let action;
  let kegData = {
    name: 'React Brew',
    brand: 'Reactify',
    alcpercent: '7',
    price: '17',
    pints: 124,
    id: 1
  }
  
  test('Should return default state if no action is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new kegData to the mainKegList', () => {
    const { name, brand, alcpercent, price, pints, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      alcpercent: alcpercent,
      price: price,
      pints: pints,
      id: id
    }
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        alcpercent: alcpercent,
        price: price,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    }
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'JerrysBrew',
        brand: 'Jerry',
        alcpercent: '9',
        price: '10',
        pints: 124,
        id: 2
      }
    });
  });
});
