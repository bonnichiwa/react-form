var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {
					type: 'text',
					placeholder: 'Name (required)',
					className: 'ContactForm-name',
					value: this.props.contact.name,
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Email',
					className: 'ContactForm-email',
					value: this.props.contact.email,
				}),
				React.createElement('textarea', {
					placeholder: 'Description',
					className: 'ContactForm-description',
					value: this.props.contact.description,
				}),
				React.createElement('button', {type: 'submit', className: 'ContactForm-button'}, 'Add Contact')
			)
		)
	}
})