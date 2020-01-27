import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    goalsAndPoints: state.goalsAndPoints,
});


class GoalGrid extends Component {

    constructor() {
        super();
        this.handleGoalClick = this.handleGoalClick.bind(this);
        this.handleGoalDeleteClick = this.handleGoalDeleteClick.bind(this);
    }

    handleGoalClick(e) {
        e.preventDefault();
        this.props.addPointValue(parseFloat(e.target.getAttribute('value')));
    }

    handleGoalDeleteClick(e) {
        e.preventDefault();
        this.props.removeGoal(e.target.getAttribute('content'));
    }

    render() {
        const goalButtons = Object.keys(this.props.goalsAndPoints).map(
            i => (
                <div className="row" key={i}>
                    <a
                        className="btn btn-info col-xs-11"
                        onClick={this.handleGoalClick}
                        content={i}
                        value={this.props.goalsAndPoints[i]}>

                        {i} – {this.props.goalsAndPoints[i]}

                    </a>

                    <button
                        className="btn col-xs-1"
                        content={i}
                        onClick={this.handleGoalDeleteClick}>

                        <i className="fas fa-trash-alt" />

                    </button>
                </div>
            ),
        );

        return (
            <div id="goals">
                <h4 id="goalsHeader">Goals</h4>
                <div id="goalGrid">
                    {goalButtons}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(GoalGrid);
