import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Industry from './containers/Industry';
import Academia from './containers/Academia';
import Resume from './containers/Resume';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/' component={App}/>
     <Route path='/about_me' component={About}/>
     <Route path='/industry' component={Industry}/>
     <Route path='/academia' component={Academia}/>
     <Route path='/resume' component={Resume}/>
   </Switch>
   </BrowserRouter>
 )
}
