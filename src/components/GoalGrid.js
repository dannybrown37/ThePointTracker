import React, { Component } from 'react';


class GoalGrid extends Component {

    constructor(props) {
        super(props);
        this.handleGoalClick = this.handleGoalClick.bind(this);
        this.handleGoalDeletion = this.handleGoalDeletion.bind(this);
    }

    handleGoalClick(e) {
        e.preventDefault();
        this.props.addPointValue(parseFloat(e.target.getAttribute('value')));
    }

    handleGoalDeletion(e) {
        // TODO -- pick up here
        e.preventDefault();
        console.log(e.target.parentElement.parentElement.getAttribute('value'));
        // this.props.removeGoal();
    }

    render() {
        const goalButtons = Object.keys(this.props.goalsAndPoints).map(
            i => (
                <a
                    className="btn btn-info btn-block"
                    key={i}
                    onClick={this.handleGoalClick}
                    value={this.props.goalsAndPoints[i]}>

                    {i} – {this.props.goalsAndPoints[i]}

                    <button
                        className="deleteGoal"
                        onClick={this.handleGoalDeletion}>

                        <i className="fas fa-trash-alt" />

                    </button>
                </a>
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

export default GoalGrid;
