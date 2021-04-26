import {useCallback, useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      const {name, value} = action;

      return {...state, [name]: value}
    case "reset":
      return action.initialForm
    default:
      throw new Error("Unhandled action");
  }
}

function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback(e => {
    const {name, value} = e.target;

    dispatch({
      type: "CHANGE",
      name,
      value
    })
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "reset",
      initialForm
    })
  }, [initialForm]);

  return [state, onChange, reset];
}

export default useInputs;