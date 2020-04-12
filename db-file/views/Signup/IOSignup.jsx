import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { toSignupURL } from 'actions/login';

class IOSignup extends React.Component {
  componentWillMount(){
    toSignupURL("nomail")
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

export default IOSignup;