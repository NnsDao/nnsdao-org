import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';

AOS.init();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
