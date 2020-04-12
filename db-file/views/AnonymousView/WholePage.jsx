import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import "assets/css/branding.css";

import karen_logo from 'assets/img/apple-icon-60x60.png';

const styles = theme => ({
  container: {
    marginTop: 20
  },
  auth: {
    minWidth:'620px',
    hight: '330px',
    maxWidth:'auto'
  },
  emailField: {
    width: '360px'
  }
})

class WholePage extends React.Component {

  state = {
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
        <Grid container direction="column" alignItems="center" className={classes.container}>

          <Grid item>
            <Grid container direction="row" spacing={24}>
              <Grid item>
                <img src={karen_logo} alt="karen"/>
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  Karen
              </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(WholePage);
