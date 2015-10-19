    import React from 'react';
    import injectTapEventPlugin from 'react-tap-event-plugin';
    import Router, { Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

    import Signup from './components/customercare/Signup';
    import Customers from './components/customercare/Customers';
    import Reports from './components/analytics/Reports';
    import Invoices from './components/billing/Invoices';
    import Engines from './components/monitor/Engines';
    import Campaigns from './components/settings/Campaigns';
    import Prices from './components/settings/Prices';

    import MainMenu from './components/MainMenu';

    let LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
    let ThemeManager = require('material-ui/lib/styles/theme-manager');

    injectTapEventPlugin();

    class App extends React.Component {

      constructor() {
        super();
        this.menuChanged = this.menuChanged.bind(this);
      }

      getChildContext() {
        return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
      }

      menuChanged(tab){
        this.context.router.transitionTo(tab.props.value);
      }

      render() {
        return (
           <div>
           <MainMenu goTo={this.menuChanged}/>
              <section className="content">
              <RouteHandler />
            </section>
            </div>
        );
      }
    }

    App.childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    App.contextTypes = {
      router: React.PropTypes.func
    };

    const AppRoutes = (
      <Route path="/" handler={App}>
        <Route name="cc.signup" path="cc/signup" handler={Signup} />
        <Route name="cc.customers" path="cc/customers" handler={Customers} />
        <Route name="ba.invoices" path="ba/invoices" handler={Invoices} />
        <Route name="ss.prices" path="ss/prices" handler={Prices} />
        <Route name="ss.campaigns" path="ss/campaigns" handler={Campaigns} />
        <Route name="a.reports" path="a/reports" handler={Reports} />
        <Route name="sm.engines" path="sm/engines" handler={Engines} />

        <Redirect from="/" to="cc.signup" />
      </Route>
    );

    Router.run(AppRoutes, Router.HashLocation, (Root) => {
      React.render(<Root />, document.getElementById("app"));
    });