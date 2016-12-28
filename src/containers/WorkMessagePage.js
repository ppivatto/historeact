//VENDOR
import React, {Component} from "react";

class WorkMessagePage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            modalImage: '',
            message: ''
        };
    }

    componentDidMount() {
    }

    render() {

      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          WorkMessagePage
        </div>
      );
    }
}

/*const styles = {
    header: {
        backgroundColor: '#2869AD'
    },
};*/

export default WorkMessagePage;
