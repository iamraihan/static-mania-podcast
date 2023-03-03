import React from "react";
import EpisodeCard from "../components/EpisodeCard";

const Episodes = () => {
  const allEpisodes = [
    {
      id: 1,
      photos:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/episodes/photo-of-people-sitting-beside-table-3182755.png",
      title: "Ep 1: How to build a world-class business brand",
    },
    {
      id: 2,
      photos:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/episodes/photo-of-women-having-conversation-3194524.png",
      title: "Ep 2: Getting the first 100 customers fo r your business",
    },
    {
      id: 3,
      photos:
        "https://raw.githubusercontent.com/iamraihan/static-mania-podcast/main/src/assets/images/episodes/person-with-phone.png",
      title: "Ep 3: Should I raise money for my startup, or not?",
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
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {allEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
