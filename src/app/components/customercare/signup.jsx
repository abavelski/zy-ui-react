import React from 'react';
import mui from 'material-ui';

let {
    Avatar,
        Card,
        CardActions,
        CardExpandable,
        CardHeader,
        CardMedia,
        CardText,
        CardTitle,
        RaisedButton,
        List,
        ListItem
} = mui;

class Signup extends React.Component {

  render() {
      let styles = {
            m : {
              paddingTop: '5px',
                paddingBottom: '5px',
                textAlign: 'center'
            },
            t : {
              paddingTop: '5px',
                paddingBottom: '5px',
                textAlign: 'center',
                backgroundColor: '#E6D5D5'
            },
            b: {
              textAlign: 'right'
            },
            flexContainer :{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              display : 'flex',
              justifyContent: 'flex-start'
            },
              flexItem: {
                  margin: '5px',
                  width: '33%'
              }
      };

    return (
        <div>
            <ul style={styles.flexContainer}>
                <li style={styles.flexItem}>
                    <Card>
                        <CardTitle style={styles.t} title="MINI"/>
                        <CardText style={styles.m}>
                            <p><b>2 hours voice</b></p>
                            <p><b>2 GB data</b></p>
                            <p>Spotify</p>
                            <h3>29 DKK</h3>
                        </CardText>
                        <CardActions style={styles.b}>
                            <RaisedButton label="BUY" primary={true} />
                        </CardActions>
                    </Card>
                </li>
                <li style={styles.flexItem}>
                    <Card>
                        <CardTitle style={styles.t} title="STANDARD"/>
                        <CardText style={styles.m}>
                            <p><b>5 hours voice</b></p>
                            <p><b>5 GB data</b></p>
                            <p>Spotify</p>
                            <h3>69 DKK</h3>
                        </CardText>
                        <CardActions style={styles.b}>
                            <RaisedButton label="BUY" primary={true} />
                        </CardActions>
                    </Card>
                </li>
                <li style={styles.flexItem}>
                    <Card>
                        <CardTitle style={styles.t} title="MEGA"/>
                        <CardText style={styles.m}>
                            <p><b>10 hours voice</b></p>
                            <p><b>10 GB data</b></p>
                            <p>Spotify</p>
                            <h3>99 DKK</h3>
                        </CardText>
                        <CardActions style={styles.b}>
                            <RaisedButton label="BUY" primary={true} />
                        </CardActions>
                    </Card>
                </li>
            </ul>
        </div>
    );
  }
}
 
export default Signup;