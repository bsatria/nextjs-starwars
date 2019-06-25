import React, { Component, Fragment } from "react";
import Layout from "../components/@layout";
import Home from "../components/Home";
import { getMovie } from "../components/Home/actions";

class WrapHome extends Component {
  static async getInitialProps(context) {
    const { reduxStore } = context;
    const movie = await reduxStore.dispatch(getMovie(1));
    return { movie };
  }

  render() {
    return (
      <Layout title="NextJS - Movie App">
        <Home />
      </Layout>
    );
  }
}

export default WrapHome;
