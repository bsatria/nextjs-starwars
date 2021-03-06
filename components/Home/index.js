import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { connect } from "react-redux";
import { Grid, Pagination } from "semantic-ui-react";

import Cards from "./Cards";

class Home extends Component {
  static propTypes = {
    movie: PropTypes.object,
    dispatch: PropTypes.func,
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      page: props.router.query.page || 1
    };
  }

  changePage = (event, { activePage }) => {
    const { router } = this.props;
    Router.push({
      pathname: "/",
      query: { page: activePage, search: router.query.search }
    });
    this.setState({
      page: activePage
    });
  };

  render() {
    const { results } = this.props.movie;
    const { count, results: movies } = results;
    const { page } = this.state;
    const totalPagination =
      movies.results === 10
        ? Math.round(count / movies.length)
        : Math.round(count / 10) || 0;
    return (
      <Grid style={{ paddingLeft: 20, boxSizing: "border-box" }}>
        <Grid.Row columns={5}>
          {movies.length > 0
            ? movies.map((val, id) => <Cards val={val} key={id} />)
            : "Data tidak ditemukan"}
        </Grid.Row>
        <Grid
          columns={1}
          style={{ marginBottom: "20px" }}
          verticalAlign="middle"
        >
          <Grid.Column>
            <Pagination
              activePage={page}
              onPageChange={this.changePage}
              totalPages={totalPagination}
            />
          </Grid.Column>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { movie } = state;
  return { movie };
};

export default connect(mapStateToProps)(Home);
