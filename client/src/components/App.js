import { Switch, BrowserRouter, Route } from 'react-router-dom';

//pages
import Home from '../pages/home.js';
// Airplanes
import ListAirplanes from '../pages/airplane/list.js';
import ListAirlines from '../pages/airline/list.js';
import Header from './Header.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/airplanes" component={ListAirplanes} />
        <Route exact path="/airlines" component={ListAirlines} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
