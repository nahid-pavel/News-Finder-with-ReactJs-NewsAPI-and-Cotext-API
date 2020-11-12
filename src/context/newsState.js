import { useReducer } from "react";
import NewsReducer from "./newsReducer";
import NewsContext from "./newsContext";
import { GET_HEADLINES, SEARCHED_NEWS } from "./types";
import axios from "axios";

const NewsState = (props) => {
  const initialState = {
    all_news: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const getHeadlines = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=70e5d5c6c7a148edbeeb34cb4bc7a327"
    );

    dispatch({
      type: GET_HEADLINES,
      payload: res.data,
    });
  };

  const searchNews = async (text) => {
    if (text === "") {
      getHeadlines();
    } else {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${text}&apiKey=70e5d5c6c7a148edbeeb34cb4bc7a327`
      );

      dispatch({
        type: SEARCHED_NEWS,
        payload: res.data,
      });
    }
  };

  return (
    <NewsContext.Provider
      value={{
        all_news: state.all_news,
        loading: state.loading,
        getHeadlines,
        searchNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
