import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BookMarketplacePage from './BookMarketplacePage/BookMarketplacePage';
import PoemSubmissionPage from './PoemSubmissionPage/PoemSubmissionPage';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/marketplace" component={BookMarketplacePage} />
        <Route path="/submit-poem" component={PoemSubmissionPage} />
      </Switch>
  );
}

export default App;
