import Ganic from 'ganic';
import { useCallback } from 'ganic-usex';
import ScenarioItem from './ScenarioItem';
import useScenarioStore from '../shared/useScenarioStore';

const ScenarioList = () => {
  const [scenarios, dispatch] = useScenarioStore();
  const list = Object.values(scenarios).filter(x => !x.removed).map(scenario =>
    <ScenarioItem key={scenario.id} data={scenario} dispatch={dispatch}/>
  );
  const add = useCallback(() => dispatch({type: 'ADD'}));

  return <div>
    <h2>Scenarios</h2>
    {list}
    <button onClick={add}>Add</button>
  </div>
}

export default ScenarioList;
