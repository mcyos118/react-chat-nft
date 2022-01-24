/**
 * Created by hshen on 9/24/16.
 */

import React from 'react'
import ChatContainer from 'js/containers/ChatContainer';
import SignInContainer from 'js/containers/SignInContainer';
import ConnectWalletContainer from 'js/containers/ConnectWalletContainer';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={ConnectWalletContainer} />
        <Route path="/signin" component={SignInContainer} />
        <Route path="/chat" component={ChatContainer}></Route>
    </Router>
);

export default Routes;
