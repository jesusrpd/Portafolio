import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SobreMi from './pages/SobreMi';
import Portafolio from './pages/Portafolio';
import Habilidades from './pages/Habilidades';
import Nav from './components/Nav';

const App = ()=>(
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/sobremi" component={SobreMi}/>
            <Route path="/portafolio" component={Portafolio}/>
            <Route path="/habilidades" component={Habilidades}/>
            <Route component={SobreMi}/>
        </Switch>
    </Router>
);

export default App;