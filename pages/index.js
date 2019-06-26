import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import Layout from "../components/@layout";
import Home from "../components/Home";
import { getMovie } from "../components/Home/actions";
import { debounce } from "../lib/utils";

class WrapHome extends Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object
  };

  static async getInitialProps(context) {
    const { reduxStore, asPath } = context;
    const movie = await reduxStore.dispatch(getMovie(asPath));
    return { movie };
  }

  onSearch = debounce((e, data) => {
    const { router } = this.props;
    Router.push({
      pathname: "/",
      query: { page: router.query.page, search: data.value }
    });
  }, 500);

  render() {
    const { router } = this.props;
    return (
      <Layout title="NextJS - Movie App" search={this.onSearch}>
        <Home router={router} />
      </Layout>
    );
  }
}

export default connect()(withRouter(WrapHome));
