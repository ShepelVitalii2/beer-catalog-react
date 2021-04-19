import { Route, Switch } from 'react-router-dom';

import StartPage from './components/StartPage';
import Basket from './components/Basket';

export default function App() {
  return (
    <Switch>
      <Route path="/beer-catalog-react" exact>
        <StartPage />
      </Route>
      <Route path="/beer-catalog-react/basket" exact>
        <Basket />
      </Route>
    </Switch>
  );
}
