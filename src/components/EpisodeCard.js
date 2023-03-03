import React from "react";
import besideTable from "../assets/images/episodes/photo-of-people-sitting-beside-table-3182755.png";
import playIcon from "../assets/images/episodes/play-icon.svg";

const EpisodeCard = () => {
  return (
    <div>
      <div className="mb-8">
        <img className="w-full" src={besideTable} alt="" />
      </div>
      <h3 className="heading-3 mb-4">
        Ep 1: How to build a world-class business brand
      </h3>
      <p className="body-text mb-4">
        Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <div className="cursor-pointer flex gap-2 items-center">
        <div className=" ">
          <img src={playIcon} alt="" />
        </div>
        <p className="body-text text-primary font-semibold">List en Now</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
