import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { registerUser } from '../../actions/authActions'

const styles = {
	textField: {
		width: '100%',
		marginBottom: 5
	},
	btnBlock: {
		textAlign: 'center',
		marginBottom: 10,
		marginTop: 20
	}
}

class Register extends Component {
	constructor (props) {
		super(props)
		this.state = {
			email: '',
			firstName: '',
			lastName: '',
			telephoneNumber: '',
			password: '',
			password2: '',
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit (e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			telephoneNumber: this.state.telephoneNumber,
			password: this.state.password,
			password2: this.state.password2
		}

		this.props.registerUser(userData, this.props.history)
	}
	render () {
		const { classes } = this.props;

		return (
			<Paper style={{ padding: 15}}>
				<form onSubmit={this.handleSubmit}>
					<TextField
						type="email"
						label="Email"
						className={classes.textField}
						value={this.state.email}
						onChange={this.handleChange}
						name="email"
					/>
					<TextField
						label="Firtname"
						type="text"
						name="firstName"
						value={this.state.firstName}
						onChange={this.handleChange}
						className={classes.textField}
					/>
					<TextField
						label="Lastname"
						type="text"
						name="lastName"
						value={this.state.lastName}
						onChange={this.handleChange}
						className={classes.textField}
					/>
					<TextField
						label="Phone"
						type="text"
						name="telephoneNumber"
						value={this.state.telephoneNumber}
						onChange={this.handleChange}
						className={classes.textField}
					/>
					<TextField
						label="Password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						className={classes.textField}
					/>
					<TextField
						label="Repeat password"
						type="password"
						name="password2"
						value={this.state.password2}
						onChange={this.handleChange}
						className={classes.textField}
					/>
					<div className={classes.btnBlock}>
						<Button variant="outlined" type="submit">
							Submit
						</Button>
					</div>
				</form>
			</Paper>
		)
	}
}

const mapStateToProps = (state) => ({
	errors:state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))