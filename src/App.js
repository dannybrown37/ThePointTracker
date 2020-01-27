import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AppHeader from './components/AppHeader';
import GoalGrid from './components/GoalGrid';
import PointTotal from './components/PointTotal';
import AddGoal from './components/AddGoal';
import RewardGrid from './components/RewardGrid';
import AddReward from './components/AddReward';


class App extends Component {

    handleNewGoal = (newGoal) => {
        this.props.dispatch({ type: 'handleNewGoal', value: newGoal });
    }

    handleNewReward = (newReward) => {
        this.props.dispatch({ type: 'handleNewReward', value: newReward });
    }

    handleGoalDeletion = (goalToDelete) => {
        this.props.dispatch({
            type: 'handleGoalDeletion',
            value: goalToDelete,
        });
    }

    handleRewardDeletion = (rewardToDelete) => {
        this.props.dispatch({
            type: 'handleRewardDeletion',
            value: rewardToDelete,
        });
    }

    handlePointAddition = (amount) => {
        this.props.dispatch({ type: 'handlePointAddition', value: amount });
    }

    handlePointDeletion = (amount) => {
        this.props.dispatch({ type: 'handlePointDeletion', value: amount });
    }

    render() {
        return (
            <div id="app">

                <AppHeader />

                <PointTotal
                    pointTotal={this.props.pointTotal} />

                <GoalGrid
                    goalsAndPoints={this.props.goalsAndPoints}
                    addPointValue={this.handlePointAddition}
                    removeGoal={this.handleGoalDeletion} />

                <AddGoal
                    addNewGoal={this.handleNewGoal} />

                <RewardGrid
                    rewardsAndPoints={this.props.rewardsAndPoints}
                    deletePointValue={this.handlePointDeletion}
                    removeReward={this.handleRewardDeletion} />

                <AddReward
                    addNewReward={this.handleNewReward} />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    goalsAndPoints: state.goalsAndPoints,
    pointTotal: state.pointTotal,
    rewardsAndPoints: state.rewardsAndPoints,
});
export default connect(mapStateToProps)(App);
