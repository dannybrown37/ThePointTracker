import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GoalGrid from './components/GoalGrid';
import PointTotal from './components/PointTotal';
import AddGoal from './components/AddGoal';
import UsePoints from './components/UsePoints';
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
                    addPointValue={this.handlePointAddition} />

                <AddGoal
                    addNewGoal={this.handleNewGoal} />

                <UsePoints
                    rewardsAndPoints={this.state.rewardsAndPoints}
                    deletePointValue={this.handlePointDeletion} />

                <AddReward
                    addNewReward={this.handleNewReward} />

            </div>
        );
    }
}

export default App;
