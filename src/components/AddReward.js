import React, { Component } from 'react';


class AddReward extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rewardTextInput: '',
            rewardValueInput: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({ rewardTextInput: event.target.value });
    }

    handleValueChange(event) {
        this.setState({ rewardValueInput: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // validate submission
        const rewardText = this.state.rewardTextInput;
        const rewardValue = this.state.rewardValueInput;

        if (rewardText.length === 0) {
            // alert('Your reward must contain text!');
            return false;
        }

        if (isNaN(parseFloat(rewardValue))) {
            // alert("Your reward's value must be a number!");
            return false;
        }

        this.setState({
            rewardTextInput: '',
            rewardValueInput: '',
        });
        this.props.addNewReward({ [rewardText]: rewardValue });

        return true;
    }

    render() {
        return (
            <div id="addReward">

                <h4 id="addRewardHeader">Add a Reward</h4>

                <form id="addRewardForm" onSubmit={this.handleSubmit}>

                    <input
                        id="rewardText"
                        type="text"
                        placeholder="Add new reward text here..."
                        value={this.state.rewardTextInput}
                        onChange={this.handleTextChange} />

                    <input
                        id="rewardValue"
                        type="text"
                        placeholder="Add new reward value here..."
                        value={this.state.rewardValueInput}
                        onChange={this.handleValueChange} />

                    <input
                        id="rewardSubmit"
                        type="submit" />

                </form>

            </div>
        );
    }
}

export default AddReward;
