import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUser = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
        console.log('Calling OnSubmit')
        return this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Username
            <input id="username" name="username" type="text" onChange={event => this.handleUser(event)}/>
          </label>
        </div>
        <div>
          <label> Password
            <input id="password" name="password" type="password" onChange={event => this.handleUser(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
