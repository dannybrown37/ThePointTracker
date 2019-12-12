import React, { Component } from 'react';


class AddGoal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goalTextInput: '',
            goalValueInput: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({ goalTextInput: event.target.value });
    }

    handleValueChange(event) {
        this.setState({ goalValueInput: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // validate submission
        const goalText = this.state.goalTextInput;
        const goalValue = this.state.goalValueInput;

        if (goalText.length === 0) {
            alert('Your goal must contain text!');
            return false;
        }

        if (isNaN(parseFloat(goalValue))) {
            alert("Your goal's value must be a number!");
            return false;
        }

        this.setState({
            goalTextInput: '',
            goalValueInput: '',
        });
        this.props.addNewGoal({ [goalText]: goalValue });

        return true;
    }

    render() {
        return (
            <div id="add-goal">

                <h4 id="add-goal-header">Add a Goal</h4>

                <form id="add-goal-form" onSubmit={this.handleSubmit}>

                    <input
                        id="goal-text"
                        type="text"
                        placeholder="Add new goal text here..."
                        value={this.state.goalTextInput}
                        onChange={this.handleTextChange} />

                    <input
                        id="goal-value"
                        type="text"
                        placeholder="Add new goal value here..."
                        value={this.state.goalValueInput}
                        onChange={this.handleValueChange} />

                    <input
                        id="goal-submit"
                        type="submit" />

                </form>

            </div>
        );
    }
}

export default AddGoal;
