import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
  numberOfIceCreams: 5,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
