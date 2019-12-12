import React, { Component } from 'react';


class GoalGrid extends Component {

    constructor(props) {
        super(props);
        this.handleGoalClick = this.handleGoalClick.bind(this);
    }

    handleGoalClick(event) {
        this.props.addPointValue(parseFloat(event.target.value));
    }

    render() {
        const goalButtons = Object.keys(this.props.goalsAndPoints).map(
            i => (
                <button
                    key={i}
                    onClick={this.handleGoalClick}
                    value={this.props.goalsAndPoints[i]}>

                    {i} – {this.props.goalsAndPoints[i]}

                </button>
            ),
        );

        return (
            <div id="goalGrid">
                {goalButtons}
            </div>
        );
    }

}

export default GoalGrid;
