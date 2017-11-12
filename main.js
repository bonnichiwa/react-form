/**
 * Actions
 */
function updateNewContact(contact) {
	setState({ newContact: contact })
}

/**
 * State
 */

// The app's complete current states
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
	Object.assign(state, changes);

	ReactDOM.render(
		React.createElement(ContactView, Object.assign({}, state, {
			onNewContactChange: updateNewContact,
		})),
		document.getElementById('react-app')
	)
}

// Set inital state
setState({
	contacts: [
		{key: 1, name: "Bonnie Pham", email: "dear.bonnie.pham@gmail.com", description: "Corgi fanatic"},
		{key: 2, name: "Christine Pham", email: "pham.christine90@gmail.com", description: "Corgi fanatic #2"},
		{key: 3, name: "James Leung", email: "james.leung83@gmail.com", description: "Corgi fanatic #2's follower"},
	],	
	newContact: {name: "", email: "", description: ""}
})
