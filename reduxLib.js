// Library Code
function createStore(reducer) {
  // The state
  let state;
  let listeners = [];

  // Gets the state
  const getState = () => state;

  // listens for events in the state
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // updates the state
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
