import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import NewsSummaryCards from "../shared/NewsSummaryCards/NewsSummaryCards";

const Home = () => {
  const all_news = useLoaderData();
  //   console.log(news);

  useTitle("Home");

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
