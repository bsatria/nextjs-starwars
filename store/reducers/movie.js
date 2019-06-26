import actionTypes from "../type";

export const movie = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_MOVIE_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_MOVIE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};

export const movieDetail = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST_DETAIL:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_MOVIE_LIST_DETAIL_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_MOVIE_LIST_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};
