import React from 'react';
import { Card, CardActions, CardText, CardTitle, RaisedButton} from 'material-ui';
import styles from './styles';
import { getPackages } from '../../services/SignupDataService';
import  { Link } from 'react-router';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            items : []
        };
    }

    componentDidMount() {
        getPackages(items => this.setState({items : items}));
    }

    render() {
        return <ul style={styles.flexContainer}>
                {this.state.items.map((item, index) =>
                    <li key={index} style={styles.flexItem}>
                    <Card>
                        <CardTitle style={styles.header} title={item.code}/>
                        <CardText style={styles.m}>
                            <p><b>{item.voice}</b></p>
                            <p><b>{item.data}</b></p>
                            <p>{item.extra}</p>
                            <h3>{item.price}</h3>
                        </CardText>
                        <CardActions style={styles.b}>
                            <RaisedButton
                                primary={true}
                                containerElement={<Link to="cc.signup.number" />}
                                linkButton={true}
                                label="buy"/>
                        </CardActions>
                    </Card>
                    </li>)}
            </ul>
  }
}
 
export default Signup;