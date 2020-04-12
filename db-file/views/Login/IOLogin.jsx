import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { toLoginURL } from 'actions/login';

class IOLogin extends React.Component {
  componentWillMount(){
    toLoginURL("nomail")
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

export default IOLogin;