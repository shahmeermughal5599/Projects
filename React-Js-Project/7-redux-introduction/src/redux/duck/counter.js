// action names
export const INCREMENT = "increment";
export const DECREMENT = "decrement";

// dispatch functions
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      if (state.count <= 0) {
        state.count = 1;
      }
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
