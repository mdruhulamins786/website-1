import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCards from "../shared/NewsSummaryCards/NewsSummaryCards";

const Home = () => {
  const all_news = useLoaderData();
  //   console.log(news);

  return (
    <div>
      <h3>Home page {all_news.length}</h3>
      {all_news.map((news) => {
        return <NewsSummaryCards key={news._id} news={news} />;
      })}
    </div>
  );
};

export default Home;
