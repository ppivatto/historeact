import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { browserHistory } from 'react-router';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true
    };

    this.getRender = this.getRender.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      drawer: {
        backgroundColor: 'red'
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer containerStyle={styles.drawer}
                        style={styles.drawer}
                        navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}/>

            <div style={styles.container}>
              {this.getRender()}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }

  getRender() {
    if(browserHistory.getCurrentLocation().pathname === '/') {
      return (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>2</TableRowColumn>
                  <TableRowColumn>Randal White</TableRowColumn>
                  <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>3</TableRowColumn>
                  <TableRowColumn>Stephanie Sanders</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>4</TableRowColumn>
                  <TableRowColumn>Steve Brown</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
      );
    }
    return this.props.children;
  }
}

HomePage.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(HomePage);
