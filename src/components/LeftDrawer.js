import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600, blueGrey300} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 30,
   //   color: typography.textFullWhite,
      color: '#FCBF49',
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
      fontFamily: 'Impact',
      textShadow: '-2px -2px 0 #843511, 2px -2px 0 #843511, -2px 2px 0 #843511, 2px 2px 0 #843511'
    },

    menuItem: {
      color: '#fcc55b',
      fontWeight: 'bold',
      fontFamily: 'Dancing Script, cursive',
      fontSize: 16
    },
    drawerContainer: {
      background: 'linear-gradient(to right, #408ed6 , #66a4de)',
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundColor: blueGrey300,
        backgroundImage:  'url(' + require('../common/assets/logo-01.png') + ')',
        width: 215,
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 35,
        display: 'block',
        color: 'white',
        fontWeight: 600,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer
        containerStyle={styles.drawerContainer}
        style={styles.drawerContainer}
        docked={true}
        open={navDrawerOpen}>
      <div style={styles.logo}>
        HistoriArg
      </div>
      <div style={styles.avatar.div}>
      </div>
      <div>
        {props.menus.map((menu, index) =>
            <MenuItem
                key={index}
                style={styles.menuItem}
                primaryText={menu.text}
                leftIcon={menu.icon}
                containerElement={<Link to={menu.link}/>}
            />
        )}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
