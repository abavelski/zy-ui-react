import React from 'react';
import { IconButton, IconMenu, FontIcon, Tabs, Tab, TextField } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';

import menuItems from './menuItems';
import styles from './styles';

class MainMenu extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedMenu: menuItems[0],
            tabsValue: '/'+menuItems[0].value +'/'+ menuItems[0].tabs[0]
        };

        this.menuClicked = this.menuClicked.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    menuClicked(e, value) {
        for (let i=0;i<menuItems.length;i++) {
            if (menuItems[i].value===value) {
                let link = '/' + menuItems[i].value + '/' + menuItems[i].tabs[0];
                this.props.goTo(link);
                this.setState({
                    selectedMenu: menuItems[i],
                    tabsValue: link
                });
                break;
            }
        }
    }

    changeTab(tab) {
        this.props.goTo(tab.props.value);
    }

    handleTabsChange(value, e, tab){
        this.setState({tabsValue: value});
    }

    render() {
        let iconButton = <IconButton iconClassName="icon-stack" iconStyle={styles.iconStyle}/>;
        let getTabKey = item => '/'+this.state.selectedMenu.value + '/' + item;

        return <header>
                <div style={styles.tabsContainer}>

                    <IconMenu style={styles.iconButton}
                              onChange={this.menuClicked}
                              value={this.state.selectedMenu.value}
                              iconButtonElement={iconButton}
                              openDirection="bottom-right">

                        {menuItems.map(item => <MenuItem value={item.value} key={item.value}
                                                primaryText={item.name}
                                                leftIcon={<FontIcon className={item.icon} />}/>)}
                    </IconMenu>

                    <div style={styles.div}><span style={styles.txt}>{this.state.selectedMenu.name}</span></div>

                    <Tabs style={styles.tabs} contentContainerStyle={styles.contentContainerStyle}
                          valueLink={{value: this.state.tabsValue, requestChange: this.handleTabsChange.bind(this)}}>

                        {this.state.selectedMenu.tabs.map(item => <Tab label={item.toUpperCase()}
                                                                    value={getTabKey(item)} key={getTabKey(item)}
                                                                    onActive={this.changeTab} />)}

                    </Tabs>
                </div>
            </header>;
    }
}

export default MainMenu;