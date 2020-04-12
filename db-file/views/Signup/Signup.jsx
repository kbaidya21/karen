import React from 'react';
// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
import Grid from '@material-ui/core/Grid';
// import Card from "components/Card/Card.jsx";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { toSignupURL } from 'actions/login';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';
import * as EmailValidator from 'email-validator';
import { RESOLVE_EMAIL_URL } from '../../constants';

import karen_logo from 'assets/img/apple-icon-60x60.png';

const styles = theme => ({
  container: {
    paddingTop:50,
    marginTop: "50px",
    minWidth: 150,
    minHight: 480,
    maxHight :"auto",
    maxWidth: "100%",
    //backgroundColor:"#E2E0FB",
    // padding: 20,
    // maxWidth: 400
     paddingBottom: 40
  },
  auth: {
    width: '320px',
    hight: '330px'
  },
  emailField: {
    width: '360px'
  }
})

class Login extends React.Component {

  state = {
    email: "nomail",
    error: null,
    signup: 'google',
    existing_user: false
  }

  handleChange = (key, value) => this.setState({ [key]: value, error: false })
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleEmail('email', this.state.email)
    }
  }

  handleEmail = () => {
    if (EmailValidator.validate(this.state.email)) {
      this.setState({ error: false })
      axios.get(RESOLVE_EMAIL_URL + this.state.email)
        .then(resp => {
          const { mx_record, existing_user } = resp.data;
          if (mx_record.includes('google')) {
            this.setState({ signup: 'google', existing_user })
          } else {
            this.setState({ signup: 'not-google', existing_user })
          }
        })
        .catch(err => { })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" alignItems="center" className={classes.container}>
        <Grid item>
          <Grid container direction="row" spacing={16}>
            <Grid item style={{paddingTop:"20px"}}>
              <img src={karen_logo} alt="karen" />
            </Grid>
            <Grid item >
              <Typography variant="h2">
                Karen
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper className={classes.auth}>
            <Grid container direction="column" alignItems="center" justify="center" className={classes.container} spacing={40}>
              <Grid item>
                <Typography variant="h5">
                  Sign-Up
                </Typography>
              </Grid>
              <Grid item className={classes.emailField}>
                {this.state.signup === 'google' ?
                  <div align="center">
                    {this.state.existing_user?
                    <Typography>
                      Email already exists. Please login
                    </Typography>
                    :
                    <Button variant="outlined" size="large" color="primary" onClick={() => toSignupURL(this.state.email)}>
                      Signup with Google
                    </Button>
                    }
                  </div>
                  :
                  <React.Fragment>
                    {this.state.signup && this.state.signup !== 'google' ?
                      <Typography color="secondary" >
                        We only allow signup with google
                      </Typography>
                      : null}
                    <TextField
                      label={this.state.error ? "Please enter a valid email" : "Enter your Email"}
                      error={this.state.error}
                      value={this.state.email}
                      onChange={(e) => this.handleChange('email', e.target.value)}
                      onKeyDown={(e) => this.handleKeyDown(e)}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <div align="center">
                      <Button variant="outlined" color="primary" onClick={this.handleEmail}>
                        Get Started
                    </Button>
                      <br />
                      <br />
                    </div>
                  </React.Fragment>
                }
              </Grid>
              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={16}>
                  <Grid item>
                    <Typography variant="caption">
                      Already have an account?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NavLink to='/login'>
                      <Button variant="outlined" style={{ fontSize: 10 }} color="primary">
                        Login
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    )
  }
}

export default withStyles(styles)(Login);
