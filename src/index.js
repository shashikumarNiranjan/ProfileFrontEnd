import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router  } from 'react-router-dom';
// import {browserHistory} from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    
      <div>
                  <Route path="/" exact component={Home} />  
      </div>  
      
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
