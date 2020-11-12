const { GET_HEADLINES, SEARCHED_NEWS } = require("./types");

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_HEADLINES:
      return {
        ...state,
        all_news: action.payload.articles,
        loading: false,
      };
    case SEARCHED_NEWS:
      return {
        ...state,
        all_news: action.payload.articles,
        loading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
