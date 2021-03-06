'use strict'

class StoreUser {
	get rules () {
		return {
      username: 'required|unique:users|max:66|regex:^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$',
			email    : 'required|email|unique:users',
			password : 'required|min:6|max:30'
		}
	}

	get validateAll () {
		return true
	}

	get messages () {
		return {
			'username.required'         : "Username can't be blank",
      'username.unique'           : 'Username is already taken',
      'username.max'              : 'Username is too long (maximum is 66 characters)',
      'username.regex'            : "Username must be letters or numbers or chinese characters or underline (underline can't start and end)",
			'email.required'            : "Email can't be blank",
			'email.email'               : 'Email is invalid',
			'email.unique'              : 'Email is already taken',
			'password.required'         : "Password can't be blank",
			'password.min'              : 'password is too short (minimum is 6 characters)',
			'password.max'              : 'password is too long (maximum is 30 characters)'
		}
	}

	async fails (errorMessages) {
		const { session, response } = this.ctx

		session.withErrors(errorMessages).flashAll()

		return response.redirect('back')
	}
}

module.exports = StoreUser
