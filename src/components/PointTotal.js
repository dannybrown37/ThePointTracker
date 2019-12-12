import React, { Component } from 'react';


class PointTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="pointTotal">
                {this.props.pointTotal}
            </div>
        );
    }

}

export default PointTotal;
