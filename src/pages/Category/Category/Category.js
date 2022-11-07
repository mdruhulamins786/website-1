import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import NewsSummaryCards from "../../shared/NewsSummaryCards/NewsSummaryCards";

const Category = () => {
  const categoryNews = useLoaderData();
  //   console.log(news);

  useTitle("category");

  return (
    <div>
      <h3>Category section {categoryNews.length}</h3>
      {categoryNews.map((news) => (
        <NewsSummaryCards key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
