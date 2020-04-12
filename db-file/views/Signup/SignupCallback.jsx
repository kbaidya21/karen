import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import * as actions from 'actions/login';
import { connect } from 'react-redux';

class Signup extends React.Component {
  componentWillMount(){
    this.props.loginCallback(this.props.history, true);
  }
  render() {
    return (
      <GridContainer direction="column" alignItems="center">
        <GridItem>
            <h4>Redirecting...</h4>
        </GridItem>
      </GridContainer>
    )
  }
}

export default connect(null, actions)(Signup);