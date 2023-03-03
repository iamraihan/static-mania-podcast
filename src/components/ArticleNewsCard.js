import React from "react";
import bioCoins from "../assets/images/articles/bitcoins-and-u-s-dollar-bills-730547.png";

const ArticleNewsCard = (data) => {
  return (
    <div>
      <div className="mb-8">
        <img className="w-full" src={data?.data?.photo} alt="" />
      </div>
      <h3 className="heading-3 mb-4">{data?.data?.title}</h3>
      <p className="body-text mb-4">
        Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <p className="body-text text-primary font-semibold cursor-pointer">
        Read Now
      </p>
    </div>
  );
};

export default ArticleNewsCard;
