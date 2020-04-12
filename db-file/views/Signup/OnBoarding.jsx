import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import * as EmailValidator from 'email-validator'

import MenuItem from '@material-ui/core/MenuItem'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Select from '@material-ui/core/Select'
import karen_logo from 'assets/img/logo-1.png'
import karen_bg from 'assets/img/bg2.jpg'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import { getUser } from 'reducers/login';
import { fetchUser } from 'actions/login';

import * as actions from 'actions/on_boarding'
//import * as actions from 'actions/dashboard';
import red from '@material-ui/core/colors/red';


const styles = {
  CustomInput: {
    display: 'inline-block'
  },
  background: {
    backgroundImage: `url(${karen_bg})`,
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    overflow: 'auto'
    // marginBottom: '40px'
    // backgroundSize:'1260px 1500px'
  },
  paddedSection: {
    paddingTop: '1rem',
    // paddingBottom: '1rem',
    marginTop: '20px'
  },
  btn: {
    marginTop: '50px',
    marginBottom: '20px',
    top: '50%',
    left: '30%',
    width: '40%',
    height:'10%'

  },
  section: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  row: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px'
  },

  col_s12: {
    float: 'left',

    boxSizing: 'border-box',
    padding: '0 0.75rem',
    minHeight: '1px',

    width: '100%',
    marginLeft: 'auto',
    left: 'auto',
    right: 'auto'
  },

  col_s4_offset_s6: {
    float: 'left',

    boxSizing: 'border-box',
    padding: '0 0.75rem',
    minHeight: '1px',

    width: 'auto',
    left: 'auto',
    right: 'auto',

    // marginLeft: '58.3333333333%'
  },

  col_s4_offset_s7: {
    float: 'left',

    boxSizing: 'border-box',
    padding: '0 0.75rem',
    minHeight: '1px',

    width: '60%',
    left: 'auto',
    right: 'auto',
    // marginTop:'10%',
    marginLeft: '20.3333333333%'
  },

  col_s4_offset_s8: {
    float: 'right',

    boxSizing: 'border-box',
    padding: '0 0.75rem',
    minHeight: '1px',

    width: '33.3333333333%',
    left: 'auto',
    right: 'auto',

    marginLeft: '66.6666666667%'
  },
  error: {
    border: '1px solid ' + red[400]
  }
}
class OnBoarding extends Component {

  componentWillMount(){
   console.log("onboarding state", this.state);
   this.props.fetchUser();
  }

  constructor(props) {
    super(props)
    this.state = {
      industry: 'non-profit-and-charity',
      designation: '',
      working_at: '',
      team_size: '1-5',
      heard_from: 'coworker-friend',
      errors:{
        isRequired: true 
      }
    }
    // this.state = {};

    this.handleChangeSelect = this.handleChangeSelect.bind(this)
    this.handleChangedesignation = this.handleChangedesignation.bind(this)
    this.handleChangeworking_at = this.handleChangeworking_at.bind(this)
    this.handleChangeteam_size = this.handleChangeteam_size.bind(this)
    this.handleChangeheard_from = this.handleChangeheard_from.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeSelect(event) {
    this.setState({ industry: event.target.value })
  }
  handleChangedesignation(event) {
    this.setState({ designation: event.target.value, errors: { ...this.state.errors, [event]: false }  })
  }
  handleChangeworking_at(event) {
    this.setState({ working_at: event.target.value, errors: { ...this.state.errors, [event]: false }  })
  }
  handleChangeteam_size(event) {
    this.setState({ team_size: event.target.value })
  }
  handleChangeheard_from(event) {
    this.setState({ heard_from: event.target.value })
  }

  handleChange = (designation, working_at) => {
    this.setState({ [designation]: working_at, errors: { ...this.state.errors, [designation]: false } })
  };

  validate = () => {
    let errors = {}
    let hasError = false

    if(this.state.designation.length === 0){
      errors.designation = true
      hasError = true
    }

  
    if (this.state.working_at.length === 0) {
      errors.working_at = true;
      hasError = true
    }
    if (hasError) {
      this.setState({ errors })
    }
    return !hasError
  
  }
 

  handleSubmit = () => {
   
    if (this.validate()) {
    const data = {
      
      action: 'schedule',
      datetime: this.state.datetime,
      industry: this.state.industry,
      designation: this.state.designation,
      working_at: this.state.working_at,
      team_size: this.state.team_size,
      heard_from: this.state.heard_from
    }   
    
    this.props.submitOnboarding(data)
      .then(resp => {
       
        window.location.assign("/dashboard?tour=true");
      })
      .catch(err => {})
    

  }
  //console.log(this.props)
}
  render() {
    return (
      <div className='background' style={styles.background}>
        <section className='section'>
          <div className='row' style={styles.row}>
            <div className='col s12' style={styles.col_s12}>
              <img
                style={{
                  height: '52px',
                  width: 'auto',
                  marginTop: '10px',
                  marginLeft: '5px'
                }}
                src={karen_logo}
                alt='karen'
              />
              
            </div>
          </div>
          {/* <div className='col s4 offset-s6' style={styles.col_s4_offset_s6}>
           
           <Typography variant='h6' style={{ color: 'black',marginLeft:'40px',marginTop:'250px' }}>
           
           </Typography>
           </div> */}
         

        </section>
       
        <section className='section'>
       
          <div className='row' style={styles.row}>
            <div className='col s4 offset-s7' style={styles.col_s4_offset_s7}>
              <Typography variant='h5' style={{ color: 'black',marginTop:'5px' }}>
              Welcome, onboard! <br/>
              Just a second, and you will be all set... <br/><br/>
              </Typography>
              <form
                onSubmit={this.handleSubmit}
                style={{ paddingBottom: '10px' }}>
                <section className='section' style={styles.section}>
                  <div className='row' style={styles.row}>
                    <div className='col s12' style={styles.col_s12}>
                    <Typography
                        style={{
                          display: 'inline',
                          color: 'black',
                          textAlign: 'justify'
                        }}>
                        I am in
                        </Typography>
                      {/* <InputLabel id='demo-simple-select'>Age</InputLabel> */}
                      <Select
                        id='demo-simple-select'
                        value={this.state.industry}
                        onChange={this.handleChangeSelect}
                        style={{ marginLeft: '15px', marginRight: '15px' }}>
                        <MenuItem value={'non-profit-and-charity'}>
                          Non profit and Charity
                        </MenuItem>
                        <MenuItem value={'recruitment-and-hiring'}>
                          Recruitment and Hiring
                        </MenuItem>
                        <MenuItem value={'sales-and-marketing'}>
                          Sales and Marketing
                        </MenuItem>
                        <MenuItem value={'education-and-institution'}>
                          Education and Institution
                        </MenuItem>
                        <MenuItem value={'small-business'}>
                          Small Business
                        </MenuItem>
                        <MenuItem value={'independent-consulting'}>
                          Independent Consulting
                        </MenuItem>
                      </Select>
                      <Typography
                        style={{
                          display: 'inline',
                          color: 'black',
                          textAlign: 'left',
                          marginLeft: '15px',
                          marginRight: '15px'
                        }}>
                        , and work as
                        </Typography>

                      <CustomInput
                        style={{
                          ...styles.CustomInput,
                          margin: '0 !important',
                          padding: '0 !important',
                          
                          marginLeft:'15px'
                        }}
                        formControlProps={{
                          fullWidth: false
                        }}
                        // id='standard-basic'
                       
                        isRequired='true'
                        
                        inputProps={{
                          //onChange: this.handleChangedesignation,
                          onChange:(e) => this.handleChange('designation', e.target.value),
                          value: this.state.designation,
                          error:this.state.errors.designation,
                          placeholder:'designation',
                          
                        }}
                      />
                      
                      <Typography
                        style={{
                          display: 'inline',
                          color: 'black',
                          textAlign: 'left',
                          marginLeft: '15px',
                          marginRight: '15px'
                        }}>
                      
                        , at an organization named
                      
                        </Typography>
                      <CustomInput
                        style={{
                          ...styles.CustomInput,
                          margin: '0 !important',
                          padding: '0 !important'
                        }}
                        formControlProps={{
                          fullWidth: false
                        }}
                      
                       
                        isRequired='true'

                        inputProps={{
                         // onChange: this.handleChangeworking_at,
                          onChange:(e) => this.handleChange('working_at', e.target.value),
                          value: this.state.working_at,
                          error:this.state.errors.working_at,
                          placeholder:'organization'
                        }}
                       
                      />
                     
                      <Typography
                        style={{
                          display: 'inline',
                          color: 'black',
                          textAlign: 'left',
                          marginLeft: '15px',
                          marginRight: '15px'
                        }}>
                        with a team of
                      
                        </Typography>
                        <Select
                        id='demo-simple-select'
                        value={this.state.team_size}
                        onChange={this.handleChangeteam_size}
                        style={{ marginLeft: '15px', marginRight: '15px' }}>
                        <MenuItem value={'1-5'}>
                          1-5
                        </MenuItem>
                        <MenuItem value={'5-20'}>5-20</MenuItem>
                        <MenuItem value={'20-50'}>20-50</MenuItem>
                        <MenuItem value={'50-100'}>
                          50-100
                        </MenuItem>
                        <MenuItem value={'100-500'}>100-500</MenuItem>
                        <MenuItem value={'500+'}>500+</MenuItem>
                      </Select>
                      <Typography
                        style={{
                          display: 'inline',
                          color: 'black',
                          textAlign: 'left',
                          marginRight: '2px'
                        }}>
                        people.
                        <br />
                        <br />I heard about you from
                      </Typography>

                      <Select
                        id='demo-simple-select'
                        value={this.state.heard_from}
                        onChange={this.handleChangeheard_from}
                        style={{ marginLeft: '15px', marginRight: '15px' }}>
                        <MenuItem value={'coworker-friend'}>
                          Coworker/Friend
                        </MenuItem>
                        <MenuItem value={'event'}>Event</MenuItem>
                        <MenuItem value={'blog'}>Blog</MenuItem>
                        <MenuItem value={'education-and-institution'}>
                          Facebook
                        </MenuItem>
                        <MenuItem value={'LinkedIn'}>LinkedIn</MenuItem>
                        <MenuItem value={'twitter'}>Twitter</MenuItem>
                        <MenuItem value={'newsletter'}>Newsletter</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                        <MenuItem value={'dont-remember'}>
                          Don't Remember
                        </MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className='row' style={styles.row}>
                    <div className='col s12' style={styles.col_s12}>
                      {/* <a href='/dashboard'> */}
                      <Button
                        variant='contained'
                        size='large'
                        color='primary'
                        style={styles.btn}
                        onClick={this.handleSubmit}
                        >
                        Continue
                      </Button>
                      {/* </a> */}
                    </div>
                  </div>
                </section>
              </form>

              {/* <a href='/onboardingoptions'>
                <Button
                  variant='contained'
                  size='large'
                  color='primary'
                  style={styles.btn}>
                  Continue
                </Button>
              </a> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}


const mstp = (state) => ({ user: getUser(state) })

//export default connect(mstp, actions)(withStyles(tasksStyle)(Meetings));
export default connect(mstp, {...actions, fetchUser})(OnBoarding);
//export default OnBoarding