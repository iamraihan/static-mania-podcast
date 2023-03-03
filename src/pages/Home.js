import React from "react";
import ArticleNews from "./ArticleNews";
import Brands from "./Brands";
import Episodes from "./Episodes";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Brands />
      <Episodes />
      <ArticleNews />
    </div>
  );
};

export default Home;
