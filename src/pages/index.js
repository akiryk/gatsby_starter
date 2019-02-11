import React from "react";

import Sparky from "../components/sparky";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Sparky />
  </Layout>
);

export default IndexPage;
