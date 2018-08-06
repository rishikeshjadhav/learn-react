import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppOne from '../apps/app-one/app-one';
import AppTwo from '../apps/app-two/app.two';

class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/app-one'>App One</Link>
                        </li>
                        <li>
                            <Link to='/app-two'>App Two</Link>
                        </li>
                    </ul>

                    <Route exact path='/app-one' component={AppOne}></Route>
                    <Route exact path='/app-two' component={AppTwo}></Route>

                </div>
            </Router>
        );
    }
}

export default MainRouter;