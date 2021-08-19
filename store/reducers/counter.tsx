import {URUN_ARTTIR,URUN_AZALT} from '../types';
const default_state = 0;

const reducer = (state = default_state,action) => {
switch (action.type) {
  case URUN_ARTTIR:
    return state + 1;
    break;

  case URUN_AZALT:
  return state - 1;
  break;

  default:
    return state;
}
};
export default reducer;