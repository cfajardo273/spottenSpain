import { Switch, BrowserRouter, Route } from 'react-router-dom';

//pages
import Home from '../pages/home.js';
// Airplanes
import ListAirplanes from '../pages/airplane/list.js';
import ListAirlines from '../pages/airline/list.js';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Spotter Spain 🇪🇸</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/airplanes" component={ListAirplanes} />
        <Route exact path="/airlines" component={ListAirlines} />
      </Switch>
      <footer>
        <p>Hecho con amor por Carmen y Diego</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
