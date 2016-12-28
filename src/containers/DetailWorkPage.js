import React, { Component } from 'react';
//import { grey500, white, blue500 } from 'material-ui/styles/colors';

/*const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  },
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '30%'
    },
    price: {
      width: '20%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '20%'
    }
  },
  iconButton: {
    float: 'left',
    paddingTop: 38
  },
  textField: {
    color: white,
    backgroundColor: blue500,
    borderRadius: 2,
    height: 35
  },
  inputStyle: {
    color: white,
    paddingLeft: 5
  },
  hintStyle: {
    height: 16,
    paddingLeft: 5,
    color: white
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 5,
    marginTop: 10
  }
};*/

class DetailWorkPage extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
          openUpload: false,
          openEdit: false,
          hitoSelected: null,
          selectedStateHito: null
      };
  }

  render() {
    console.log('render DetailWorkPage', this.props.obra);
    return (
      <div>
        DetailWorkPage
      </div>
    );
  }
}

export default DetailWorkPage;
