import React, { Component } from 'react';


class UsePoints extends Component {

    constructor(props) {
        super(props);
        this.handlePointUsage = this.handlePointUsage.bind(this);
    }

    handlePointUsage() {

    }

    render() {
        return (
            <div id="usePointsOptions">
                <h4 id="usePointsHeader">Use Those Points, Baby</h4>
                <button>5</button>
                <button>10</button>
                <button>15</button>
                <button>20</button>
                <button>25</button>
            </div>
        );
    }

}

export default UsePoints;
