import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GoalGrid from './components/GoalGrid';
import PointTotal from './components/PointTotal';
import AddGoal from './components/AddGoal';
import UsePoints from './components/UsePoints';


class App extends Component {
    constructor() {
        super();
        this.state = {

            goalsAndPoints: {
                'Stayed within my calorie goal': 0.5,
                'Walked 10,000 or more steps': 1,
                'Burned 3,500 or more calories': 1.5,
            },

            pointTotal: 0,
        };
    }

    handleNewGoal = (newGoal) => {
        const mergedObject = { ...this.state.goalsAndPoints, ...newGoal };
        this.setState({ goalsAndPoints: mergedObject });
    }

    handlePointAddition = (value) => {
        this.setState({ pointTotal: this.state.pointTotal + value });
    }

    render() {
        return (
            <div id="app">

                <AppHeader />

                <PointTotal pointTotal={this.state.pointTotal} />

                <GoalGrid
                    goalsAndPoints={this.state.goalsAndPoints}
                    addPointValue={this.handlePointAddition} />

                <AddGoal addNewGoal={this.handleNewGoal} />

                <UsePoints />

            </div>
        );
    }
}

export default App;
