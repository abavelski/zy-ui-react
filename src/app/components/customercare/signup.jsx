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

    startSignup(item) {
        console.log('starting signup', item);
        this.props.history.pushState(null, "/cc/choose-number");
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
                            <RaisedButton primary={true} label="buy" onMouseDown={this.startSignup.bind(this, item)}/>
                        </CardActions>
                    </Card>
                    </li>)}
            </ul>
  }
}
 
export default Signup;