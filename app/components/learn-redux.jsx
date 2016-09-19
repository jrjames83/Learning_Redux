var redux = require('redux');


// Name reducer and action generators
// ---------------------
var nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name // just return a string
		default:
			return state;
	}
}

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name: name
	}
};


// Hobbies reducer and action generators
// ---------------------

var nextHobbyId = 1;
var hobbyReducer = (state = [], action) => {
	switch (action.type) {
		
		case 'ADD_HOBBY':
		return [
				...state,
				   {
				   	id: nextHobbyId++,
				   	hobby: action.hobby
				   }
			   ]

		case 'REMOVE_HOBBY':
			return  state.filter((hobby) => hobby.id !== action.id)

		default:
			return state;
	}
}

var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby: hobby
	}
}

var removeHobby = (hobbyId) => {
	return {
		type: 'REMOVE_HOBBY',
		id: hobbyId
	}
}

// Movies reducer and action generators
// ---------------------

var nextMovieId = 1;
var movieReducer = (state = [], action) => {
	switch (action.type) {
		
		case 'ADD_MOVIE':
		return [
				...state,
				   {
				   	id: nextMovieId++,
				   	title: action.title,
				   	genre: action.genre
				   }
			   ]

		case 'REMOVE_MOVIE':
			return  state.filter((movie) => movie.id !== action.id)

		default:
			return state;
	}
}


var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title: title,
		genre: genre
	}
}

var removeMovie = (movieId) => {
	return {
		type: 'REMOVE_MOVIE',
		id: movieId
	}
}







var reducer = redux.combineReducers({
	name: nameReducer,
	hobby: hobbyReducer,
	movies: movieReducer,

})

var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log("Subscription: ", state);
})


// Pass in the action to dispatch
store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Jeffrey James'
});

store.dispatch(changeName('New Name Goeff'));

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
})

store.dispatch(addHobby('Walking - But a new action generated one'));

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Walking'
})

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})


store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Wallye',
	genre: 'Animation'
})

store.dispatch(addMovie('XMen', 'Action Movie'))

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Terminator',
	genre: 'SciFi'
})

// NOw get rid of the movie
store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 2
})
//unsubscribe(); // this breaks the subscription 

store.dispatch(changeName('New Name Goeff -- Final Name tho'));

store.dispatch(removeHobby(1));









