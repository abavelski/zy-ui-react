import React from 'react';
import { Card, CardActions, CardText, CardTitle, RaisedButton} from 'material-ui';
import styles from './styles';
import { getPackages } from '../../services/SignupDataService';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            items : []
        };
    }

    componentDidMount() {
        getPackages((items) => {
            this.setState({items : items});
        });
    }

    render() {
        return (<div>
            <ul style={styles.flexContainer}>
                {this.state.items.map(function(item){
                    return <li style={styles.flexItem}>
                    <Card>
                        <CardTitle style={styles.t} title={item.code}/>
                        <CardText style={styles.m}>
                            <p><b>{item.voice}</b></p>
                            <p><b>{item.data}</b></p>
                            <p>{item.extra}</p>
                            <h3>{item.price}</h3>
                        </CardText>
                        <CardActions style={styles.b}>
                            <RaisedButton label="BUY" primary={true} />
                        </CardActions>
                    </Card>
                    </li>}, this)}
            </ul>
        </div>
    );
  }
}
 
export default Signup;