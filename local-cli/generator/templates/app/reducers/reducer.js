let defaultState = {
  title: 'Hi'
};

function reducer(state = defaultState, action) {
  switch (action.type) {
  case 'Hello':
    return {...state, title: action.text};
  default:
    return state;
  }
}

module.exports = reducer;
