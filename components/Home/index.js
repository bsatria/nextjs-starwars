import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Pagination } from "semantic-ui-react";

import Cards from "./Cards";

import { getMovie, getMovieDetail } from "./actions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
  }

  changePage = (event, { activePage }) => {
    const { dispatch } = this.props;
    dispatch(getMovie(activePage));
  };

  render() {
    const { results } = this.props.movie;
    const { results: movies, count } = results;
    const { page } = this.state;
    console.log(results);
    return (
      <Grid>
        <Grid.Row columns={5}>
          {movies.map((val, id) => {
            return <Cards val={val} key={id} />;
          })}
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
              totalPages={count}
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
