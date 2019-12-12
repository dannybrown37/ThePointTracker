import React, { Component } from 'react';


class RewardGrid extends Component {

    constructor(props) {
        super(props);
        this.handleRewardClick = this.handleRewardClick.bind(this);
        this.handleRewardDeleteClick = this.handleRewardDeleteClick.bind(this);
    }

    handleRewardClick(e) {
        this.props.deletePointValue(parseFloat(e.target.getAttribute('value')));
    }

    handleRewardDeleteClick(e) {
        e.preventDefault();
        this.props.removeReward(e.target.getAttribute('content'));
    }

    render() {
        const rewardButtons = Object.keys(this.props.rewardsAndPoints).map(
            i => (
                <div className="row" key={i}>
                    <a
                        className="btn btn-success col-xs-11"
                        onClick={this.handleRewardClick}
                        content={i}
                        value={this.props.rewardsAndPoints[i]}>

                        {i} – {this.props.rewardsAndPoints[i]}

                    </a>

                    <button
                        className="btn col-xs-1"
                        content={i}
                        onClick={this.handleRewardDeleteClick}>

                        <i className="fas fa-trash-alt" />

                    </button>

                </div>
            ),
        );
        return (
            <div id="rewards">
                <h4 id="rewardsHeader">Indulgences</h4>
                <div id="rewardsGrid">
                    {rewardButtons}
                </div>
            </div>
        );
    }

}

export default RewardGrid;
