var redux = require('redux');




// Combined all the reducers

var actions = require('./../actions/index');
var store = require('./../store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
	console.log("New State: ", store.getState());
	var state = store.getState();

	if (state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Is Loading...'
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = 
			`<a href="${state.map.url}">View Your location</a>`
	}
})


store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Jeffrey James'))
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Sleeping'));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.addMovie('XMen', 'Action Movie'))
store.dispatch(actions.addMovie('Terminator', 'SciFi'))
store.dispatch(actions.addMovie('Titanic', 'Drama'))
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.changeName('Jeffrey R. James'));
store.dispatch(actions.removeHobby(1));









