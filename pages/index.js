import React, { Component } from "react";
import Layout from "../components/@layout";
import Home from "../components/Home";
import { getMovie } from "../components/Home/actions";

class WrapHome extends Component {
  static async getInitialProps(context) {
    const { reduxStore, query } = context;
    const page = query.page || 1;
    const movie = await reduxStore.dispatch(getMovie(page));
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
