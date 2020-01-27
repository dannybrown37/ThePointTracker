import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const initialState = {

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

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'handleNewGoal': {
            const merge = { ...state.goalsAndPoints, ...action.value };
            return { goalsAndPoints: merge };
        }
        case 'handleNewReward': {
            const merge = { ...state.rewardsAndPoints, ...action.value };
            return { rewardsAndPoints: merge };
        }
        case 'handleGoalDeletion': {
            const newGoals = state.goalsAndPoints;
            delete newGoals[action.value];
            return { goalsAndPoints: newGoals };
        }
        case 'handleRewardDeletion': {
            const newRewards = state.rewardsAndPoints;
            delete newRewards[action.value];
            return { rewardsAndPoints: newRewards };
        }
        case 'handlePointAddition': {
            return { pointTotal: state.pointTotal + action.value };
        }
        case 'handlePointDeletion': {
            return { pointTotal: state.pointTotal - action.value };
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

const WrappedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <WrappedApp />,
    document.getElementById('root'),
);
