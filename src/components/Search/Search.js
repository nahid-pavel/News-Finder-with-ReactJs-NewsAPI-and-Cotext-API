import React, { useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import NewsContext from "../../context/newsContext";

const Search = () => {
  const { searchNews } = useContext(NewsContext);

  return (
    <>
      <InputGroup
        className="mt-3"
        style={{ width: "100%", margin: "auto" }}
        onChange={(e) => searchNews(e.target.value)}
      >
        <FormControl
          placeholder="Search News "
          aria-label="Search News "
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </>
  );
};

export default Search;
