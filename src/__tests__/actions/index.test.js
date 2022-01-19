import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('React Tap actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name: 'ReactTap', brand: 'Reactify', alcpercent: '12', price: '12', pints: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'ReactTap',
      brand: 'Reactify',
      alcpercent: '12',
      price: '12',
      pints: 124,
      id: 1
    });
  })
});

