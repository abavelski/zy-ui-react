import React from 'react';
import Router, { Route, IndexRoute, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

import Signup from './components/customercare/Signup';
import ChooseNumber from './components/customercare/ChooseNumber';
import UserData from './components/customercare/UserData';

import Customers from './components/customercare/Customers';
import Reports from './components/analytics/Reports';
import Invoices from './components/billing/Invoices';
import Engines from './components/monitor/Engines';
import Campaigns from './components/settings/Campaigns';
import Prices from './components/settings/Prices';
import Main from './main';

const AppRoutes = (
        <Route path="/" component={Main}>

            <Route path="cc/signup" component={Signup} />
            <Route path="cc/choose-number" component={ChooseNumber} />
            <Route path="cc/user-data" component={UserData} />
            <Route path="cc/customers" component={Customers} />
            <Route path="ba/invoices" component={Invoices} />
            <Route path="ss/prices" component={Prices} />
            <Route path="ss/campaigns" component={Campaigns} />
            <Route path="a/reports" component={Reports} />
            <Route path="sm/engines" component={Engines} />
            <IndexRoute component={Signup}/>
        </Route>
);

export default AppRoutes;