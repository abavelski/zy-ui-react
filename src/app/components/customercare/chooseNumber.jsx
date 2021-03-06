import React from 'react';
import { Card, CardActions, CardText, CardTitle, RaisedButton, RadioButtonGroup, RadioButton} from 'material-ui';
import styles from './styles';
import { getRandomPhoneNumbers } from '../../services/SignupDataService';

class ChooseNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers : [],
      selectedNumber:null
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  componentDidMount() {
    getRandomPhoneNumbers(10, numbers => this.setState({numbers : numbers, selectedNumber: numbers[0]}));
  }

  handleCancel() {
    this.props.history.pushState(null, "/cc/signup");
  }

  handleContinue() {
    this.props.history.pushState(null, "/cc/user-data");
  }

  render() {
    return (
        <ul style={styles.wizardContainer}>
          <Card style={styles.wizardItem}>
            <CardTitle style={styles.header} title="choose phone number"/>
            <CardText>
              <RadioButtonGroup name="phoneNumbers" valueSelected={this.state.selectedNumber}>
                {this.state.numbers.map(number =>
                        <RadioButton style={styles.numberItem} value={number} label={number} key={number} />
                )}
              </RadioButtonGroup>
            </CardText>
            <CardActions style={styles.rightAlign}>
              <RaisedButton secondary={true} onMouseDown={this.handleCancel} label="cancel"/>
              <RaisedButton primary={true} onMouseDown={this.handleContinue} label="next"/>
            </CardActions>
          </Card>
        </ul>
    );
  }
}

ChooseNumber.contextTypes = {
  router: React.PropTypes.func
};

export default ChooseNumber;