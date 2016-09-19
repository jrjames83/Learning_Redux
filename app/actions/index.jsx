var axios = require('axios');


export var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name: name
	}
};


export var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby: hobby
	}
}

export var removeHobby = (hobbyId) => {
	return {
		type: 'REMOVE_HOBBY',
		id: hobbyId
	}
}




export var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title: title,
		genre: genre
	}
}

export var removeMovie = (movieId) => {
	return {
		type: 'REMOVE_MOVIE',
		id: movieId
	}
}





export var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
}

export var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url: url
	}
}

// Action generator that dispatches multiple actions
// We use redux thunk for this 
export var fetchLocation = () => {
	return (dispatch, getState) => {
			// Kick Things Ooff
	dispatch(startLocationFetch()); // start doing something - is loading icon
	
	// Async request for data
	axios.get('http://ipinfo.io').then(function(res) {
		var loc = res.data.loc;
		var baseUrl = 'https://maps.google.com/?q='
		// Call complete location fetc
		dispatch(completeLocationFetch(baseUrl + loc))
	})
	}
}