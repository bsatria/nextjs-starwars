import fetch from "../../lib/fetch";
import actionTypes from "../../store/type";

const { STAR_WARS_API } = process.env;

// reducer

const movieDetailReq = () => ({
  type: actionTypes.GET_MOVIE_LIST_DETAIL_REQUEST
});

const movieDetailFail = error => ({
  type: actionTypes.GET_MOVIE_LIST_DETAIL_FAILURE,
  payload: error,
  error: true
});

const movieDetail = data => ({
  type: actionTypes.GET_MOVIE_LIST_DETAIL,
  payload: {
    results: data,
    loading: false
  }
});

// eslint-disable-next-line import/prefer-default-export
export const getMovieDetail = query => dispatch => {
  dispatch(movieDetailReq());
  const url = `${STAR_WARS_API}people/${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(movieDetail(result));
      return result;
    })
    .catch(error => dispatch(movieDetailFail(error)));
};
