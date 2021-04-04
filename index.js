import React from 'react';
import ReactDOM from 'react-dom';

import './services/database.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Initial from './pages/Initial/index.js'
import Products from './pages/Products/index.js'
import FeedBack from './pages/FeedBack/index.js'
import Partners from './pages/Partners/index.js'
import Trolley from './pages/Trolley/index.js'
import Adm from './pages/AdmPanel/index.js'
import Pendente from './pages/Pendente/index.js'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Initial} />
    </Switch>
  </Router>,
  document.getElementById('root')
);