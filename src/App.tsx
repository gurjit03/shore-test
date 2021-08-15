import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, createStore } from './config/store';

import Layout from './components/Layout/Layout'
import ContactsPage from './pages/Contacts'
import HomePage from './pages/Home'
import DefaultPage from './pages/Default'

import './App.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <Provider createStore={createStore}>
        <Router>
          <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/contacts">
                  <ContactsPage />
                </Route>
                <Route path="*">
                  <DefaultPage />
                </Route>  
              </Switch>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
