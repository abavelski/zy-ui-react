import mui from 'material-ui';
let Colors = mui.Styles.Colors;
let padding = 600;

export default {
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