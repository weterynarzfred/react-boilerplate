const ACTION_TYPES = {
  TEST: 'TEST',
};

export default function mainReducer(state, action) {
  if (action.type === ACTION_TYPES.TEST) {
    state.test++;
  }
}

export {
  ACTION_TYPES,
};
