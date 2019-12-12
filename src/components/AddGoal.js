import React, { Component } from 'react';


class AddGoal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconClass: 'plus',
            goalFormVisibility: 'invisible',
            goalTextInput: '',
            goalValueInput: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick() {
        if (this.state.goalFormVisibility === 'invisible') {
            this.setState({
                goalFormVisibility: 'visible',
                iconClass: 'minus',
            });
        } else {
            this.setState({
                goalFormVisibility: 'invisible',
                iconClass: 'plus',
            });
        }
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
            // alert('Your goal must contain text!');
            return false;
        }

        if (isNaN(parseFloat(goalValue))) {
            // alert("Your goal's value must be a number!");
            return false;
        }

        this.setState({
            goalTextInput: '',
            goalValueInput: '',
            goalFormVisibility: 'invisible',
            iconClass: 'plus',
        });
        this.props.addNewGoal({ [goalText]: goalValue });

        return true;
    }

    render() {
        const currentIconClass = `fas fa-${this.state.iconClass}-circle fa-lg`;

        return (
            <div id="addGoal" >

                <div id="addItemIcon" className="row">

                    <button className="btn" onClick={this.handleIconClick}>
                        <i className={currentIconClass} />
                    </button>

                </div>

                <div className="row">

                    <form
                        id="addGoalForm"
                        className={this.state.goalFormVisibility}
                        onSubmit={this.handleSubmit}>

                        <input
                            id="goalText"
                            className="col-xs-8"
                            type="text"
                            placeholder="Add new goal text here..."
                            value={this.state.goalTextInput}
                            onChange={this.handleTextChange} />

                        <input
                            id="goalValue"
                            className="col-xs-3"
                            type="text"
                            placeholder="Add new goal value here..."
                            value={this.state.goalValueInput}
                            onChange={this.handleValueChange} />

                        <input
                            id="goalSubmit"
                            className="col-xs-1"
                            type="submit" />

                    </form>

                </div>

            </div>
        );
    }
}

export default AddGoal;
