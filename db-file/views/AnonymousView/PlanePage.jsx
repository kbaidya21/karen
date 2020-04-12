import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import "assets/css/branding.css";
import { loadReCaptcha } from 'react-recaptcha-google'

const styles = theme => ({
  container: {
    margin: '12%',
    marginTop: 0,
    padding: '5%' ,
    minPadding:'10%'
  },
})

class PlanePage extends React.Component {

  state = {
  }
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <div id="page-region" className="topcorner">
          <div className="branding">
            <div className="badge">
              <a href="/signup" target="_blank">
                <div>powered</div>
                <div>by Karen</div>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PlanePage);