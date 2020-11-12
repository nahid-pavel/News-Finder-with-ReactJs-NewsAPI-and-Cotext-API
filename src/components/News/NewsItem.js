import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsItem = ({ item }) => {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img
          variant="top"
          src={
            item.urlToImage
              ? item.urlToImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHtyDD6yRTic3aXSUCii9RBDE-JNDc4eLYVQ&usqp=CAU"
          }
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="outline-success" href={item.url} target="_blank">
            Read More...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsItem;
