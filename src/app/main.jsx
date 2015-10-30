import React from 'react';
import MainMenu from './components/menu/MainMenu';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';


class Main extends React.Component {

    constructor() {
        super();
        this.menuChanged = this.menuChanged.bind(this);
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    }

    menuChanged(link) {
        this.props.history.pushState(null, link);
    }

    render() {
        return <div>
            <MainMenu goTo={this.menuChanged}/>
            <section className="content">
                {this.props.children}
            </section>
        </div>
    }
}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};


export default Main;