import React from "react";
import ArticleNewsCard from "../components/ArticleNewsCard";
import news from "../assets/images/articles/news.png";

const ArticleNews = () => {
  const articles = [
    {
      id: 1,
      photo:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/articles/bitcoins-and-u-s-dollar-bills-730547.png",
      title: "Getting the first 100 customers for your business",
    },
    {
      id: 2,
      photo:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/articles/top-view-of-assorted-gadgets-on-desk-3568520.png",
      title: "Apparently we had reached a great height in the atmosphere, ...",
    },
  ];
  return (
    <div className="container mx-auto pb-[128px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#F4F2FF]">
          <div className=" p-10">
            <h3 className="text-32px mb-4 text-dark ">
              Read our <br /> articles & news
            </h3>
            <p className="body-text font-semibold text-primary">See More</p>
          </div>
          <div>
            <img src={news} alt="" />
          </div>
        </div>
        <div>
          <ArticleNewsCard data={articles[0]} />
        </div>
        <div>
          <ArticleNewsCard data={articles[1]} />
        </div>
      </div>
    </div>
  );
};

export default ArticleNews;
