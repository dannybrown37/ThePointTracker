import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GoalGrid from './components/GoalGrid';
import PointTotal from './components/PointTotal';
import AddGoal from './components/AddGoal';
import RewardGrid from './components/RewardGrid';
import AddReward from './components/AddReward';


class App extends Component {
    constructor() {
        super();
        this.state = {

            goalsAndPoints: {
                'Stayed within my calorie goal': 0.5,
                'Walked 10,000 steps': 1,
                'Burned 3,500 calories': 1.5,
            },

            pointTotal: 0,

            rewardsAndPoints: {
                'Cheat meal': 25,
            },
        };
    }

    handleNewGoal = (newGoal) => {
        const mergedObject = { ...this.state.goalsAndPoints, ...newGoal };
        this.setState({ goalsAndPoints: mergedObject });
    }

    handleNewReward = (newReward) => {
        const mergedObject = { ...this.state.rewardsAndPoints, ...newReward };
        this.setState({ rewardsAndPoints: mergedObject });
    }

    handleGoalDeletion = (goalToDelete) => {
        const newGoals = this.state.goalsAndPoints;
        delete newGoals[goalToDelete];
        this.setState({ goalsAndPoints: newGoals });
    }

    handleRewardDeletion = (rewardToDelete) => {
        const newRewards = this.state.rewardsAndPoints;
        delete newRewards[rewardToDelete];
        this.setState({ rewardsAndPoints: newRewards });
    }

    handlePointAddition = (value) => {
        this.setState({ pointTotal: this.state.pointTotal + value });
    }

    handlePointDeletion = (value) => {
        this.setState({ pointTotal: this.state.pointTotal - value });
    }

    render() {
        return (
            <div id="app">

                <AppHeader />

                <PointTotal
                    pointTotal={this.state.pointTotal} />

                <GoalGrid
                    goalsAndPoints={this.state.goalsAndPoints}
                    addPointValue={this.handlePointAddition}
                    removeGoal={this.handleGoalDeletion} />

                <AddGoal
                    addNewGoal={this.handleNewGoal} />

                <RewardGrid
                    rewardsAndPoints={this.state.rewardsAndPoints}
                    deletePointValue={this.handlePointDeletion}
                    removeReward={this.handleRewardDeletion} />

                <AddReward
                    addNewReward={this.handleNewReward} />

            </div>
        );
    }
}

export default App;
