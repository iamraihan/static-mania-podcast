import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/images/hero/Brand.svg";
import applePodcast from "../assets/images/footer/Apple Podcast.png";
import googlePodcast from "../assets/images/footer/Google Podcast.png";
import soundcloudPodcast from "../assets/images/footer/Soundcloud.png";
import spotifyPodcast from "../assets/images/footer/Spotify.png";

const Footer = () => {
  return (
    <div className="">
      <div>
        <p>absolute area</p>
      </div>
      <div className="bg-dark pb-24  pt-[192px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
          <div>
            <img src={brand} alt="" />
          </div>
          <div>
            <h2 class="footer-title mb-8">Pages</h2>
            <nav class="list-none">
              <li>
                <Link to="#">
                  <p className="body-text text-white mb-4">Home</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <p className="body-text text-white mb-4">Podcast</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <p className="body-text text-white mb-4">Host</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <p className="body-text text-white mb-4">Blog</p>
                </Link>
              </li>
            </nav>
          </div>
          <div>
            <h2 class="footer-title mb-8">Reach Us</h2>
            <nav class="list-none">
              <li>
                <Link to="#">
                  <p className="body-text text-white mb-4">Contact</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {" "}
                  <p className="body-text text-white mb-4">About</p>
                </Link>
              </li>
            </nav>
          </div>
          <div>
            <h2 class="footer-title mb-8">Subscribe</h2>
            <nav class="list-none">
              <li className="mb-8">
                <img src={applePodcast} alt="" />
              </li>
              <li className="mb-8">
                <img src={googlePodcast} alt="" />
              </li>
              <li className="mb-8">
                <img src={soundcloudPodcast} alt="" />
              </li>
              <li className="mb-8">
                <img src={spotifyPodcast} alt="" />
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-primary py-5 text-center">
        <p className="footer-title ">© Copyright Finsweet 2021</p>
      </div>
    </div>
  );
};

export default Footer;
