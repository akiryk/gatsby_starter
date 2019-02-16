import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Thanks = props => (
  <Layout>
    <h1>Thank you</h1>
    <p>
      You have successfully submitted the form. Why not{" "}
      <Link to="/page-2/">where you started</Link>:(
    </p>
  </Layout>
);

export default Thanks;
