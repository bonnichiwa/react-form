var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
	},

	onNameInput: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
	},

	onEmailInput: function(e) {
		this.props.onChange(Object.assign({}. this.props.value, {email: e.target.value}))
	},

	onDescriptionInput: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}))
	},

	render: function() {
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {
					type: 'text',
					placeholder: 'Name (required)',
					className: 'ContactForm-name',
					value: this.props.value.name,
					onInput: this.onNameInput
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Email',
					className: 'ContactForm-email',
					value: this.props.value.email,
					onInput: this.onEmailInput
				}),
				React.createElement('textarea', {
					placeholder: 'Description',
					className: 'ContactForm-description',
					value: this.props.value.description,
					onInput: this.onDescriptionInput
				}),
				React.createElement('button', {type: 'submit', className: 'ContactForm-button'}, 'Add Contact')
			)
		)
	}
})