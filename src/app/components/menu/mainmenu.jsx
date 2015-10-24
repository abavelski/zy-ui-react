import React from 'react';
import { IconButton, IconMenu, FontIcon, Tabs, Tab } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';

import menuItems from './menuItems';
import styles from './styles';

class MainMenu extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedMenu: menuItems[0],
            tabsValue: menuItems[0].value +'.'+ menuItems[0].tabs[0]

        };
        this.clicked = this.clicked.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    clicked(e, value) {
        for (let i=0;i<menuItems.length;i++) {
            if (menuItems[i].value===value) {
                this.props.goTo(menuItems[i].value+'.'+menuItems[i].tabs[0]);
                this.setState({
                    selectedMenu: menuItems[i],
                    tabsValue: menuItems[i].value+'.'+menuItems[i].tabs[0]
                });
                break;
            }
        }
    }

    changeTab(tab) {
        this.props.goTo(tab.props.value);
    }

    _handleTabsChange(value, e, tab){
        this.setState({tabsValue: value});
    }

    render() {
        let iconButton = <IconButton iconClassName="icon-stack" iconStyle={styles.iconStyle}/>;

        return <header>
                <div style={styles.tabsContainer}>

                    <IconMenu style={styles.iconButton}
                              onChange={this.clicked}
                              value={this.state.selectedMenu.value}
                              iconButtonElement={iconButton}
                              openDirection="bottom-right">

                        {menuItems.map((item)=>{
                            return <MenuItem value={item.value}
                                             primaryText={item.name}
                                             leftIcon={<FontIcon className={item.icon} />}/>
                        })}

                    </IconMenu>

                    <div style={styles.div}><span style={styles.txt}>{this.state.selectedMenu.name}</span></div>

                    <Tabs style={styles.tabs} contentContainerStyle={styles.contentContainerStyle}
                          valueLink={{value: this.state.tabsValue, requestChange: this._handleTabsChange.bind(this)}}>

                        {this.state.selectedMenu.tabs.map((item) => {
                            return <Tab label={item.toUpperCase()}
                                        value={this.state.selectedMenu.value + '.' + item}
                                        onActive={this.changeTab} />
                        })}

                    </Tabs>
                </div>
            </header>;
    }
}

export default MainMenu;