import React from 'react';
import { Card, CardActions, CardText, CardTitle, RaisedButton, TextField} from 'material-ui';
import styles from './styles';

class UserData extends React.Component {
    constructor() {
        super();
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        this.props.history.pushState(null, "/cc/signup");
    }

    render() {
        return (
            <ul style={styles.wizardContainer}>
                <Card style={styles.wizardItem}>
                    <CardTitle style={styles.header} title="user data"/>
                    <CardText>
                        <TextField style={{marginRight: 20}} floatingLabelText="First Name"/>
                        <TextField style={{marginRight: 20}} floatingLabelText="Last Name"/>
                        <TextField style={{marginRight: 20}} floatingLabelText="Address"/>
                        <TextField style={{marginRight: 20}} floatingLabelText="City"/>
                        <TextField style={{marginRight: 20}} floatingLabelText="Zip"/>
                    </CardText>
                    <CardActions style={styles.rightAlign}>
                        <RaisedButton secondary={true} onMouseDown={this.handleCancel} label="cancel"/>
                        <RaisedButton primary={true} label="next"/>
                    </CardActions>
                </Card>
            </ul>
        );
    }
}

export default UserData;