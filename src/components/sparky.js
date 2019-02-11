import React from "react";

class Sparky extends React.Component {
  componentDidMount() {
    fetch("/.netlify/functions/hello")
      .then(response => {
        return response.json();
      })
      .then(console.log)
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return <p>This should put some info in the console...</p>;
  }
}

export default Sparky;
