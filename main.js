/**
 * Dummy data
 */
var contacts = [
	{key: 1, name: "Bonnie Pham", email: "dear.bonnie.pham@gmail.com", description: "Corgi fanatic"},
	{key: 2, name: "Christine Pham", email: "pham.christine90@gmail.com", description: "Corgi fanatic #2"},
	{key: 3, name: "James Leung", email: "james.leung83@gmail.com", description: "Corgi fanatic #2's follower"},
]

var newContact = {name: "", email: "", description: ""}

/**
 * Entry point
 */
ReactDOM.render(
	React.createElement(ContactView, {
		contacts: contacts,
		newContact: newContact
	}),
	document.getElementById('react-app')
)