import useReducer from './useReducer';

const newScenario = id => ({
  id,
  name: `Scenario name`,
  given: `given`,
  scripts: `you see input
    you do highlight
    you use Rango Movie
    you do input
    you do submit`,
  removed: false,
});

const scenariosReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      const newId = Math.random();
      return {
        ...state,
        [newId]: newScenario(newId),
      };
    case 'REMOVE':
      return {
        ...state,
        [payload]: {
          ...state[payload],
          removed: true,
        },
      };
    case 'UPDATE':
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload
        },
      };
  }
  return state;
}

const initState = {}
const useScenarioStore = () => useReducer(
  scenariosReducer,
  initState,
  `homoscript__scenario_store`,
);

export default useScenarioStore;
