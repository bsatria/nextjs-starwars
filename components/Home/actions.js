import fetch from "../../lib/fetch";
import actionTypes from "../../store/type";

const { STAR_WARS_API } = process.env;

// reducer
const movieList = data => ({
  type: actionTypes.GET_MOVIE_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const movieListReq = () => ({
  type: actionTypes.GET_MOVIE_LIST_REQUEST
});

const movieListFail = error => ({
  type: actionTypes.GET_MOVIE_LIST_FAILURE,
  payload: error,
  error: true
});

// component
export const getMovie = query => dispatch => {
  dispatch(movieListReq());
  const queryNul = query || "";
  const url = `${STAR_WARS_API}people/?page=${queryNul}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(movieList(result));
      return result;
    })
    .catch(error => dispatch(movieListFail(error)));
};

export const getMovieSearch = query => dispatch => {
  const url = `${STAR_WARS_API}/people/?search=${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(movieList(result));
      return result;
    })
    .catch(error => error);
};
