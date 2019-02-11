import React from "react";

class Sparky extends React.Component {
  state = {
    message: "waiting..."
  };

  componentDidMount() {
    fetch("/.netlify/functions/hello")
      .then(response => {
        return response.json();
      })
      .then(o => {
        this.setState({
          message: o.msg
        });
      })
      .catch(e => {
        this.setState({
          message: "sorry, there was an error getting the message!"
        });
      });
  }

  render() {
    return (
      <p>This should put some info in the console: {this.state.message}</p>
    );
  }
}

export default Sparky;
