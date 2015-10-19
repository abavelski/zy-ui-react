import React from 'react';
import mui from 'material-ui';

let MenuItem = require('material-ui/lib/menus/menu-item');
let Typography = mui.Styles.Typography;
let Colors = mui.Styles.Colors;
let {
    IconButton,
    IconMenu,
    FontIcon,
    Tabs,
    Tab } = mui;

let menuItems = [
    {
        name: 'Customer Care',
        icon: 'icon-users',
        value: 'cc',
        tabs: ['signup', 'customers']

    },
    {
        name: 'Billing Admin',
        icon: 'icon-credit-card',
        value: 'ba',
        tabs: ['invoices']
    },
    {
        name: 'System Settings',
        icon: 'icon-cogs',
        value: 'ss',
        tabs: ['prices','campaigns']
    },
    {
        name: 'Analytics',
        icon: 'icon-stats-dots',
        value: 'a',
        tabs: ['reports']
    },
    {
        name: 'System Monitor',
        icon: 'icon-tux',
        value: 'sm',
        tabs: ['engines']
    }
];

class MainMenu extends React.Component {
    constructor() {
        super();
        this.state = {selectedMenu: menuItems[0]};
        this.clicked = this.clicked.bind(this);
    }

    clicked(e, value) {
        console.log('clicked', value);

        for (let i=0;i<menuItems.length;i++) {
            if (menuItems[i].value===value) {
                this.setState({
                    selectedMenu: menuItems[i]
                });
                break;
            }
        }
    }

    render() {
        let padding = 600;
        let styles = {
            contentContainerStyle: {
                marginLeft: -padding
            },

            txt: {
                color: Colors.white,
                fontWeight: 300,
                top: 12,
                position: 'absolute',
                fontSize: 24
            },
            div: {
                position: 'absolute',
                left: 48,
                backgroundColor: Colors.cyan500,
                width: padding,
                height: 48
            },
            iconButton: {
                position: 'absolute',
                left: 0,
                backgroundColor: Colors.cyan500,
                color: Colors.white,
                marginRight: padding
            },
            iconStyle: {
                color: Colors.white
            },
            tabs: {
                position: 'relative'
            },
            tabsContainer: {
                position: 'relative',
                paddingLeft: padding
            }
        };

        let iconButton = <IconButton iconClassName="icon-stack" iconStyle={styles.iconStyle}/>;

        return (
            <header>
                <div style={styles.tabsContainer}>

                    <IconMenu style={styles.iconButton}
                              onChange={this.clicked}
                              value={this.state.selectedMenu.value}
                              iconButtonElement={iconButton}
                              openDirection="bottom-right">

                        {menuItems.map(function(item){
                            return <MenuItem value={item.value}
                                             primaryText={item.name}
                                             leftIcon={<FontIcon className={item.icon} />}/>
                        }, this)}

                    </IconMenu>

                    <div style={styles.div}><span style={styles.txt}>{this.state.selectedMenu.name}</span></div>

                    <Tabs style={styles.tabs} contentContainerStyle={styles.contentContainerStyle}>

                        {this.state.selectedMenu.tabs.map(function(item){
                            return <Tab label={item.toUpperCase()} value={this.state.selectedMenu.value + '.' + item} onActive={this.props.goTo} />
                        }, this)}

                    </Tabs>
                </div>
            </header>
        );
    }
}

export default MainMenu;