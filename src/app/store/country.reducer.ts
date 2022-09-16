import { createReducer } from '@ngrx/store';
import { CountryAction, CountryActionType } from '../actions/country.action';
// //create a dummy initial state
 
const initialState: Array = [
  {
    id: '1',
    name: 'United States of America',
    shortName: 'US',
  },
];
 
export function CountryReducer(
  state: Array = initialState,
  action: CountryAction
) {
  switch (action.type) {
    case CountryActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}