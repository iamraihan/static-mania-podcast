import React from "react";
import EpisodeCard from "../components/EpisodeCard";

const Episodes = () => {
  const allEpisodes = [
    {
      id: 1,
      photos:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/episodes/photo-of-people-sitting-beside-table-3182755.png",
    },
    {
      id: 2,
      photos:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/episodes/photo-of-women-having-conversation-3194524.png",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mb-16 flex justify-between flex-wrap lg:flex-nowrap">
        <div>
          <h3 className="text-32px text-dark mb-4 ">Recent Episodes</h3>
          <p className="body-text max-w-[371px] ">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black.
          </p>
        </div>
        <div className="flex items-end mt-5">
          <button className="primary-btn ">See All Episiodes</button>
        </div>
      </div>
      <div>
        <EpisodeCard />
      </div>
    </div>
  );
};

export default Episodes;
