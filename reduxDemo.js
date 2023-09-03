const redux = require('redux')

const counterReducer = function (state = { counter: 1 }, action) {
    if (action.type === "INCREMENT") {
        return { counter: state.counter + 1 }

    }
    else if (action.type === "DECREMENT") {
        return { counter: state.counter - 1 }
    }
    else {
        return state;
    }
}

// this store consist the all reducer function 

const store = redux.createStore(counterReducer)

// if we do that we get the intial state
console.log(store.getState());


const counterSubscriber = () => {
    const latestStore = store.getState();
    console.log(latestStore);
}

store.subscribe(counterSubscriber)

store.dispatch({ type: "DECREMENT" })
