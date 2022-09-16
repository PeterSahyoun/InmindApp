import { createAction } from "@ngrx/store";


export enum CountryActionType {
  ADD_ITEM = '[COUNTRY] Add Country',
}
export class AddItemAction implements Action {
  readonly type = CountryActionType.ADD_ITEM;
  //optional payload
  constructor(public payload: CountryItem) {}
}
export type CountryAction = AddItemAction;