import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey700, grey500, white} from 'material-ui/styles/colors';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../theme-default';
import Dialog from 'material-ui/Dialog';
import { RED_ERROR } from '../constants/colors';

const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey700
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
  errorMsgTextStyle: {
      alignSelf: 'center',
      color: RED_ERROR,
      fontSize: 12,
      opacity: 0.9,
      paddingTop: 5,
      paddingBottom: 5
  }
};

class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      openError: false
    };
    this.renderError=this.renderError.bind(this);
    this.onKeyPress=this.onKeyPress.bind(this);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>
                <TextField
                  value={this.props.userName}
                  onChange={({target: {value}}) => this.props.onUserChange(value)}
                  onKeyPress={this.onKeyPress}
                  hintText="Usuario"
                  floatingLabelText="Usuario"
                  fullWidth={true}
                />
                <TextField
                  value={this.props.password}
                  onChange={({target: {value}}) => this.props.onPasswordChange(value)}
                  onKeyPress={this.onKeyPress}
                  hintText="Contraseña"
                  floatingLabelText="Contraseña"
                  fullWidth={true}
                  type="password"
                />
                <div style={styles.errorMsgTextStyle}>
                {this.props.mensajeError}
                </div>
                <div>
                  <Checkbox
                    label="Recordar"
                    style={styles.checkRemember.style}
                    labelStyle={styles.checkRemember.labelStyle}
                    iconStyle={styles.checkRemember.iconStyle}
                  />
                  <RaisedButton label="Ingresar"
                                primary={true}
                                style={styles.loginBtn}
                                onTouchTap={this.onPressSignIn}/>
                </div>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Olvidé mi contraseña"
                href="/"
                style={styles.flatButton}
                icon={<Help />}
              />
            </div>
          </div>
          {this.renderError()}
        </div>
      </MuiThemeProvider>
    );
  }

  onKeyPress(e) {
    /*if (e.key === 'Enter') {
      this.onPressSignIn();
    }*/
  }

  renderError() {
    const actions = [
      <FlatButton
        label="Aceptar"
        primary={true}
        onTouchTap={() => this.setState({openError: false, msjError: ''})}
      />
    ];
    return (
      <div>
        <Dialog
          title="¡Ups!"
          contentStyle={{width: 600}}
          actions={actions}
          modal={false}
          open={this.state.openError}
          onRequestClose={() => this.setState({openError: false, msjError: ''})}
        >
        {this.state.msjError}
        </Dialog>
      </div>
    );
  }

}

export default LoginPage;
