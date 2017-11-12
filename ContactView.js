var ContactView = React.createClass({
	propTypes: {
		contacts: React.PropTypes.array.isRequired,
		newContact: React.PropTypes.object.isRequired,
	},

	render: function() {
		var contactItemElements = this.props.contacts
		.map(function(contact) { return React.createElement(ContactItem, contact)
		})

		return (
			React.createElement('div', {className: 'ContactView'},
				React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
				React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
				React.createElement(ContactForm, {
					contact: this.props.newContact
				})
			)
		)
	},
})