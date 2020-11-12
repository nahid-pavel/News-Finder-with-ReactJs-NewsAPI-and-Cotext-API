import React, { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import NewsContext from "../../context/newsContext";
import NewsItem from "./NewsItem";

const NewsItems = () => {
  const { getHeadlines, all_news, loading } = useContext(NewsContext);

  console.log(all_news);

  useEffect(() => {
    getHeadlines();
  }, [getHeadlines]);
  return (
    <div className="row mt-4">
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {all_news.length > 1 &&
        all_news.map((item, index) => {
          return <NewsItem key={index} item={item} />;
        })}
    </div>
  );
};

export default NewsItems;
