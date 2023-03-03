import React from "react";
import applePodcasts from "../assets/images/brand/Apple Podcast.png";
import soundCloudPodcasts from "../assets/images/brand/Sound Cloud.png";
import googlePodcasts from "../assets/images/brand/Google Podcast.png";
import spotifyPodcasts from "../assets/images/brand/Spotify.png";

const Brands = () => {
  return (
    <div className="container mx-auto pb-24 lg:pb-[138px] ">
      <div className="flex justify-between gap-[85px] flex-wrap lg:flex-nowrap">
        {" "}
        <div>
          <h3 className="heading-3 leading-9">Podcast Available On</h3>
        </div>
        <div>
          <img src={applePodcasts} alt="" />
        </div>
        <div>
          <img src={soundCloudPodcasts} alt="" />
        </div>
        <div>
          <img src={googlePodcasts} alt="" />
        </div>
        <div>
          <img src={spotifyPodcasts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
