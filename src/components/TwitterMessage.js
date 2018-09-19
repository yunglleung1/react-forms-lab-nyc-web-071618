import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleMessage = (event) => {
    this.setState({
      maxChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="maxChars" onChange={event => this.handleMessage(event)}/>
        <h1>Remaining Characters: {this.state.maxChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
