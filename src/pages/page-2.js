import React from "react";
import Layout from "../components/layout";
import FormClass from "../components/form-class";

const handleClick = () => {
  fetch(`/.netlify/functions/get-post`)
    .then(res => {
      console.log("first return");
      console.log(res);
      return res.json();
    })
    .then(json => {
      console.log("second return");
      console.log(json);
    })
    .catch(err => {
      alert("we had an error");
    });
};

const SecondPage = () => (
  <Layout>
    <FormClass />
    <button onClick={handleClick}>Get Post</button>
  </Layout>
);

export default SecondPage;
