import React from 'react';
import { BrowserRouter as Router ,Switch ,  Route} from 'react-router-dom';
import Profile from './Profile';
import Projects from './Projects';
import Work from './Work'
import Education from './Education';


const Pages= ({user}) =>{
    return (
        <Router>
            <Switch>
                <Route exact path ='/'>
                    <Profile user={user} />
                </Route>
                <Route exact path ='/projects'>
                    <Projects user={user} />
                </Route>
                <Route exact path ='/work'>
                    <Work user={user} />
                </Route>
                <Route exact path ='/education'>
                    <Education user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages
