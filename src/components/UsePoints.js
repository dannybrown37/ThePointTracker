import React, { Component } from 'react';


class UsePoints extends Component {

    constructor(props) {
        super(props);
        this.handleRewardClick = this.handleRewardClick.bind(this);
    }

    handleRewardClick(event) {
        this.props.deletePointValue(parseFloat(event.target.value));
    }

    render() {
        const rewardButtons = Object.keys(this.props.rewardsAndPoints).map(
            i => (
                <button
                    key={i}
                    onClick={this.handleRewardClick}
                    value={this.props.rewardsAndPoints[i]}>

                    {i} – {this.props.rewardsAndPoints[i]}

                </button>
            ),
        );
        return (
            <div id="usePointsOptions">
                <h4 id="usePointsHeader">Indulgences</h4>
                <div id="usePointsOptionsGrid">
                    {rewardButtons}
                </div>
            </div>
        );
    }

}

export default UsePoints;
