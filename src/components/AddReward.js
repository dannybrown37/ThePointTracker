import React, { Component } from 'react';


class AddReward extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconClass: 'plus',
            rewardFormVisibility: 'invisible',
            rewardTextInput: '',
            rewardValueInput: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick() {
        if (this.state.rewardFormVisibility === 'invisible') {
            this.setState({
                rewardFormVisibility: 'visible',
                iconClass: 'minus',
            });
        } else {
            this.setState({
                rewardFormVisibility: 'invisible',
                iconClass: 'plus',
            });
        }
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
            rewardFormVisibility: 'invisible',
            iconClass: 'plus',
        });
        this.props.addNewReward({ [rewardText]: rewardValue });

        return true;
    }

    render() {
        const currentIconClass = `fas fa-${this.state.iconClass}-circle fa-lg`;

        return (

            <div id="addReward">

                <div id="addItemIcon" className="row">

                    <button className="btn" onClick={this.handleIconClick}>
                        <i className={currentIconClass} />
                    </button>

                </div>

                <div className="row">

                    <form
                        id="addRewardForm"
                        className={this.state.rewardFormVisibility}
                        onSubmit={this.handleSubmit}>

                        <input
                            id="rewardText"
                            className="col-xs-8"
                            type="text"
                            placeholder="Add new reward text here..."
                            value={this.state.rewardTextInput}
                            onChange={this.handleTextChange} />

                        <input
                            id="rewardValue"
                            className="col-xs-3"
                            type="text"
                            placeholder="Add new reward value here..."
                            value={this.state.rewardValueInput}
                            onChange={this.handleValueChange} />

                        <input
                            className="col-xs-1"
                            id="rewardSubmit"
                            type="submit" />

                    </form>

                </div>

            </div>
        );
    }
}

export default AddReward;
