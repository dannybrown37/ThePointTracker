import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    pointTotal: state.pointTotal,
});

class PointTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="pointTotal">
                {Math.round(this.props.pointTotal * 10) / 10}
            </div>
        );
    }

}

export default connect(mapStateToProps)(PointTotal);
