    import injectTapEventPlugin from 'react-tap-event-plugin';
    import ReactDom from 'react-dom';
    import React from 'react';
    import Router from 'react-router';
    import createHistory from 'history/lib/createHashHistory';

    import AppRoutes from './routes';

    injectTapEventPlugin();
    ReactDom.render(
        <Router history={createHistory({queryKey: false})}>
            {AppRoutes}
        </Router>, document.getElementById("app"));
