/* eslint-disable default-param-last */
import { createStore } from "redux";

const initialState = { showMenu: false };

const menuSlider = (state = initialState, action) => {
  if (action.type === "toggle") {
    return {
      ...state,
      showMenu: !state.showMenu,
    };
  }
  return state;
};

const store = createStore(menuSlider);

export default store;
