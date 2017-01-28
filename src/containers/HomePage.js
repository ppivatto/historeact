import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import SliderHistory from '../components/sliderHistory';

import { browserHistory } from 'react-router';

const styles = {
  container: {
    // margin: '0 auto',
    // padding: '2rem',
    // width: '100%',
    // height: '30rem',
    // background: '#419be0',
  },
  sliderDiv: {
    width: '70%',
    // display: 'flex !important',
    // alignSelf: 'center',
    // flexDirection: 'column !important',
    // alignItems: 'center !important',
    // marginTop: 0,
    // marginBottom: 0,
  },
  sliderImg: {
    // position: 'relative',
    // height: '20rem',
    // maxWidth: '70%',
  },
};

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

            <LeftDrawer
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
            <SliderHistory style={{width: '100%'}}/>
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
