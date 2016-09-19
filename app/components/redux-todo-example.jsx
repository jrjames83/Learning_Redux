var redux = require('redux');


// searchText,showCompleted, todos 

var initState = {
	searchText: '',
	showCompleted: false,
	todos: []
}

var reducer = (state = initState, action) => {

	switch (action.type) {
		case 'CHANGE_SEARCHTEXT':
			return {
				...state,
				searchText: action.text
			}

		default:
			return state;
	}

};


var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));
//console.log('Pre Dispatch State: ', store.getState());

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	//console.log("Subscription: ", state.searchText);
	//document.getElementById('app').innerHTML = state.searchText;
})

store.dispatch({
	type: 'CHANGE_SEARCHTEXT',
	text: 'dog'
});

store.dispatch({
	type: 'CHANGE_SEARCHTEXT',
	text: 'dogs'
});

store.dispatch({
	type: 'CHANGE_SEARCHTEXT',
	text: 'dogss'
});

// Add subscribe call and render to browser each time state changes











